import React from 'react'

const FaceRecognition = ({ imageUrl }) => {
	return (
		<div>
			<div
				// className="center"
				style={{
					// 	height: '900px',
					// 	width: '500px',
					// 	borderColor: 'white',
					// 	borderWidth: '5px'
					margin: '1rem'
				}}
			>
				<div
					className="relative center h6"
					style={{
						maxWidth: '800px'
						// height: '800px'
					}}
				>
					<img
						className="absolute"
						// className="ma"
						style={{ maxWidth: '100%', maxHeight: '100%' }}
						src={imageUrl}
						alt=""
					/>
				</div>
			</div>
			<div>HELLO THERE</div>
		</div>
	)
}

export default FaceRecognition
