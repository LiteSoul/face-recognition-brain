import React from 'react'

const ImageUploadForm = ({ uploadImage, grabImage }) => {
	return (
		<div>
			<p className="f4 white">
				{'Do you look like a famous celebrity? Find out by pasting your image URL here:'}
			</p>
			<div className="center form pa3 br3 shadow-6">
				<input
					className="f4 pa2 w-70 center"
					type="file"
					accept="image/*"
					onChange={uploadImage}
				/>
				<button
					className="f4 w-30 grow link ph3 pv2 dib white bg-dark-green"
					onClick={grabImage}
				>
					Go
				</button>
			</div>
		</div>
	)
}

export default ImageUploadForm
