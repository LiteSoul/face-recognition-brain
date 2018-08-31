import React from 'react'
import Tilt from 'react-tilt'
import logo from './logo.png'

const Logo = () => {
	return (
		<div>
			<Tilt
				className="Tilt"
				options={{ max: 30 }}
				style={{ height: 120, width: 150 }}
			>
				<div className="Tilt-inner pa2">
					<img src={logo} alt="logo" />
				</div>
			</Tilt>
		</div>

		// <img src={brain} alt="brlogo" />
	)
}

export default Logo
