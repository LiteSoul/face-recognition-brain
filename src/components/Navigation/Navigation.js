import React from 'react'
import Logo from '../Logo/Logo'
import './Navigation.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {
	return (
		<header className="nav">
			<nav className="logo">
				<div>
					<Logo />
				</div>
			</nav>
			<nav className="rightnav pointer">
				{isSignedIn ? (
					<div
						onClick={() => {
							onRouteChange('guest')
						}}
					>
						<p>Sign Out</p>
					</div>
				) : (
					<div onClick={() => onRouteChange('signin')}>
						<p>Sign In</p>
					</div>
				)}
			</nav>
		</header>
	)
}

export default Navigation
