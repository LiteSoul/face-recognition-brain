import React from 'react'
import './ImageUploadForm.css'

const ImageUploadForm = ({ uploadImage, grabImage }) => {
	return (
		<div>
			<p className="f4 white">
				{'Do you look like a famous celebrity? Find out by uploading or taking a picture:'}
			</p>
			<div className="center form pa3 br3 shadow-6">
				<input
					className="f4 pa2 w-70 center"
					type="file"
					accept="image/*"
					onChange={uploadImage}
				/>
			</div>
		</div>
	)
}

export default ImageUploadForm
