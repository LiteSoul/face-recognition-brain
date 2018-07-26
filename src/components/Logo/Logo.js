import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain.png'
import './logo.css'

const Logo = () => {
	return (
		// <div className="ma4 mt0">
		// 	<Tilt
		// 		className="Tilt"
		// 		options={{ max: 30 }}
		// 		style={{ height: 150, width: 150 }}
		// 	>
		// 		<div className="Tilt-inner pa3">
		// 			<img style={{ paddingTop: '5px' }} src={brain} alt="brlogo" />
		// 		</div>
		// 	</Tilt>
		// </div>

		<img src={brain} alt="brlogo" />
	)
}

export default Logo
