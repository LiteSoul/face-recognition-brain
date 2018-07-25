import React, { Component } from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
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
			imageUrl: ''
		}
	}

	onInputChange = event => {
		this.setState({ input: event.target.value })
	}

	onButtonClick = () => {
		this.setState({ imageUrl: this.state.input })
		app.models
			.predict('e466caa0619f444ab97497640cefc4dc', this.state.input)
			.then(
				function(response) {
					// do something with response
					console.log(
						response.outputs[0].data.regions[0].region_info.bounding_box
					)
				},
				function(err) {
					// there was an error
				}
			)
	}

	render() {
		return (
			<div className="App">
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm
					onInputChange={this.onInputChange}
					onButtonClick={this.onButtonClick}
				/>
				{/* <Particles className="particles" /> */}
				<FaceRecognition imageUrl={this.state.imageUrl} />
			</div>
		)
	}
}

export default App
