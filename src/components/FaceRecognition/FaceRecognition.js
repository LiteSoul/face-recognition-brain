import React from 'react'

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className="center ma">
			<img
				className="absolute"
				style={{ width: '90%' }}
				src={imageUrl}
				alt=""
			/>
		</div>
	)
}

export default FaceRecognition
