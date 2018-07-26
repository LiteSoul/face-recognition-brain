import React, { Component } from 'react'
import Navigation from './components/Navigation/Navigation'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import CelebrityResults from './components/CelebrityResults/CelebrityResults'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
// import Particles from 'react-particles-js'
import './App.css'
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
			box: {}
		}
	}

	onInputChange = event => {
		this.setState({ input: event.target.value })
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

	onButtonClick = () => {
		this.setState({ imageUrl: this.state.input })
		app.models
			.predict('e466caa0619f444ab97497640cefc4dc', this.state.input)
			.then(response =>
				this.displayFaceBox(this.calculateFaceLocation(response))
			)
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div className="App">
				<Navigation />
				<Rank />
				<ImageLinkForm
					onInputChange={this.onInputChange}
					onButtonClick={this.onButtonClick}
				/>
				<CelebrityResults box={this.state.box} />
				<FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
			</div>
		)
	}
}

export default App
