import React, { Component } from 'react'
import Navigation from './components/Navigation/Navigation'
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
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

	onInputChange = event => {
		this.setState({ input: event.target.value })
		if (event.key === 'Enter') { this.onPictureSubmit() }
	}

	calculateFaceLocation = data => {
		const faceBox = data.outputs[0].data.regions[0].region_info.bounding_box
		const name1 =
			data.outputs[0].data.regions[0].data.face.identity.concepts[0].name
		// const name1plus = name1.replace('e', 'crazy')
		const name2 =
			data.outputs[0].data.regions[0].data.face.identity.concepts[1].name
		const image = document.getElementById('inputImage')
		const width = Number(image.width)
		const height = Number(image.height)
		console.log('width ' + width)
		console.log('height' + height)
		console.log('with a bit of ')
		// console.log(name1plus)
		return {
			name1: name1,
			// name1plus: name1plus,
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
	}

	onPictureSubmit = () => {
		this.setState({ imageUrl: this.state.input })
		app.models
			.predict('e466caa0619f444ab97497640cefc4dc', this.state.input)
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
				this.displayFaceBox(this.calculateFaceLocation(response)
				)
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
									onPictureSubmit={this.onPictureSubmit}
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
