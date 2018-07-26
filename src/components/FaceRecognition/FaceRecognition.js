import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div className="center ma">
			<div className="absolute">
				{/* <div className={box.name1 ? 'white f3 showIt' : 'white f3 hideIt'}>
					Mmmm... Looks a lot like {box.name1} with a bit of {box.name2}!
				</div> */}
				<img
					id="inputImage"
					style={{ width: '600px' }}
					className="mt3 mb3"
					src={imageUrl}
					alt=""
					className={box.name2 ? 'showIt' : 'hideIt'}
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
