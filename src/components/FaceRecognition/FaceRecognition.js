import React from 'react'

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div className="center ma">
			<div>
				<img width="800px" className="mt3 mb3" src={imageUrl} alt="" />
			</div>
		</div>
	)
}

export default FaceRecognition
