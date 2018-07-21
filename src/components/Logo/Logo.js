import React from 'react'
import Tilt from 'react-tilt'
import brlogo from './brlogo.png'
import './logo.css'

const Logo = () => {
	return (
		<div className="ma4 mt0">
			<Tilt
				className="Tilt"
				options={{ max: 30 }}
				style={{ height: 150, width: 150 }}
			>
				<div className="Tilt-inner">
					<img src="{brlogo}" alt="" />
				</div>
			</Tilt>
		</div>
	)
}

export default Logo
