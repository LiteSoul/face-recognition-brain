import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ box, imageUrl }) => {
	return (
		<div className="center ma">
			<div className="absolute mt3 mb3">
				<img
					className={box.name2 ? 'showIt' : 'hideIt'}
					id="inputImage"
					style={{ width: '600px' }}
					src={imageUrl}
					alt=""
				/>
				<div
					className="face-box"
					style={{
						top: box.topRow,
						right: box.rightCol,
						bottom: box.bottomRow,
						left: box.leftCol
					}}
				/>
			</div>
		</div>
	)
}

export default FaceRecognition
