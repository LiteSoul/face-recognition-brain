import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className="center ma">
			<div className='absolute'>
				<img
					id="inputImage"
					width="800px"
					className="mt3 mb3"
					src={imageUrl}
					alt=""
				/>
				<div
					className="face-box"
					style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
				/>
			</div>
		</div>
	)
}

export default FaceRecognition
