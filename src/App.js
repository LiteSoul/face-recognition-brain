import React, { Component } from 'react'
import Navigation from './components/Navigation/Navigation'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import ImageUploadForm from './components/ImageUploadForm/ImageUploadForm'
import CelebrityResults from './components/CelebrityResults/CelebrityResults'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
// import Particles from 'react-particles-js'
import './App.css'
import GithubCorner from 'react-github-corner'
import Clarifai from 'clarifai'
//-----Clarifai celebrity------
const app = new Clarifai.App({
	apiKey: '2aa9d2dfddf344478b3a91d9fd0e9bd7'
})

class App extends Component {
	constructor() {
		super()
		this.state = {
			input: '',
			imageUrl: '',
			box: {},
			route: 'home',
			isSignedIn: false,
			user: {
				id: "",
				name: "",
				email: "",
				password: "",
				entries: 0,
				joined: ''
			}
		}
	}

	calculateFaceLocation = data => {
		const faceBox = data.outputs[0].data.regions[0].region_info.bounding_box
		const name1 =
			data.outputs[0].data.regions[0].data.face.identity.concepts[0].name
		// const name1plus = name1.replace('e', 'crazy')
		const name2 =
			data.outputs[0].data.regions[0].data.face.identity.concepts[1].name
		console.log(data)
		console.log(faceBox)
		console.log(name1)
		const image = document.getElementById('inputImage')
		const width = Number(image.width)
		const height = Number(image.height)
		console.log(height + image)
		return {
			name1: name1,
			name2: name2,
			leftCol: faceBox.left_col * width,
			rightCol: width - faceBox.right_col * width,
			topRow: faceBox.top_row * height,
			bottomRow: height - faceBox.bottom_row * height
		}
	}

	displayFaceBox = box => {
		console.log(box)
		this.setState({ box: box })
		console.log(this.state.box)
	}

	onInputChange = event => {
		this.setState({ input: event.target.value })
		if (event.key === 'Enter') { this.grabImage() }
	}

	uploadImage = event => {
		const file = event.target.files[0]
		console.log(file)
		//this.sendToImgur(file)
		//this.sendToClarifai(file)
		let reader = new FileReader()
		reader.readAsDataURL(file);
		reader.onload = (event) => {
			console.log(event.target.result)
			const result = event.target.result
			this.setState({ imageUrl: result })
			const splitted = result.split('base64,')[1]
			console.log(splitted)
			const fileForClarifai = { base64: splitted }
			this.sendToClarifai(fileForClarifai)
		}
		//remove data:*/*;base64, from the string.
	}

	grabImage = () => {
		this.setState({ imageUrl: this.state.input })
		this.sendToImgur(this.state.input)
		this.sendToClarifai()
	}

	sendToImgur = file => {
		console.log(file)
		const formData = new FormData()
		formData.append('image', file)
		fetch('https://api.imgur.com/3/image', {
			method: 'post',
			//headers: { 'Authorization': 'Client-ID e696f80891f2c08', 'Content-Type': 'application/json' },
			headers: { 'Authorization': 'Client-ID e696f80891f2c08' },
			//body: JSON.stringify({ image: image })
			body: formData
		})
			.then(response => response.json())
			.then(data => {
				console.log(data)
				console.log(data.data.link)
			})
	}

	sendToClarifai = (file) => {
		app.models
			//.predict('e466caa0619f444ab97497640cefc4dc', this.state.input)
			.predict('e466caa0619f444ab97497640cefc4dc', file)
			.then(response => {
				if (response) {
					fetch('http://localhost:3000/image', {
						method: 'put',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							id: this.state.user.id
						})
					})
						.then(response => response.json())
						.then(count => {
							this.setState(
								// a way to 'update' the entries only and leave the rest as is
								Object.assign(this.state.user, { entries: count })
							)
						})
				}
				this.displayFaceBox(this.calculateFaceLocation(response))
			}
			)
			.catch(err => console.log(err))
	}

	onRouteChange = route => {
		route === 'loggedin'
			? this.setState({ isSignedIn: true })
			: this.setState({ isSignedIn: false })
		this.setState({ route: route })
	}

	loadUser = data => {
		this.setState({
			user: {
				id: data.id,
				name: data.name,
				email: data.email,
				password: data.password,
				entries: data.entries,
				joined: data.joined
			}
		}
		)
	}

	render() {
		const { route, isSignedIn, box, imageUrl } = this.state
		return (
			<div className="App">
				<Navigation
					onRouteChange={this.onRouteChange}
					isSignedIn={isSignedIn}
				/>
				{this.state.user.name ? (
					<Rank name={this.state.user.name} entries={this.state.user.entries} />
				) : <div></div>}
				{route === 'signin' ? (
					<SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
				) : route === 'register' ? (
					<Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
				) : (
							<div>
								<ImageLinkForm
									onInputChange={this.onInputChange}
									sendToClarifai={this.sendToClarifai}
								/>
								<ImageUploadForm
									uploadImage={this.uploadImage}
									sendToImgur={this.sendToImgur}
									grabImage={this.grabImage}
								/>
								<CelebrityResults box={box} />
								<FaceRecognition box={box} imageUrl={imageUrl} />
							</div>
						)}
				<GithubCorner href="https://github.com/LiteSoul/face-recognition-brain" />
			</div>
		)
	}
}

export default App
