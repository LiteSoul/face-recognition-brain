import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonClick }) => {
	return (
		<div>
			<p className="f3">
				{'This artificial brain recognizes faces in your pictures, try it out!'}
			</p>
			<div className="center form pa3 br3 shadow-6">
				<input
					className="f4 pa2 w-70 center"
					type="text"
					name=""
					id=""
					onChange={onInputChange}
				/>
				<button
					className="f4 w-30 grow link ph3 pv2 dib white bg-dark-green"
					onClick={onButtonClick}
				>
					Det
				</button>
			</div>
		</div>
	)
}

export default ImageLinkForm
