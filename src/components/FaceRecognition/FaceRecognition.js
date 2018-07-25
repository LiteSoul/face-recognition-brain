import React from 'react'

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className="center" style={{ maxWidth: '800px' }}>
			<img
				className="absolute"
				// className="ma"
				style={{ maxWidth: '100%', height: 'auto' }}
				src={imageUrl}
				alt=""
			/>
		</div>
	)
}

export default FaceRecognition
