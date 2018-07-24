import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = () => {
	return (
		<div>
			<p className="f3">
				{'This artificial brain recognizes faces in your pictures, try it out!'}
			</p>
			<div className="center form pa4 br3 shadow-6">
				<input className="f4 pa2 w-70 center" type="text" name="" id="" />
				<button className="f4 w-30 grow link ph3 pv2 dib white bg-dark-green">
					Detect
				</button>
			</div>
		</div>
	)
}

export default ImageLinkForm
