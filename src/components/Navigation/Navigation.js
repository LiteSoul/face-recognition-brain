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
							onRouteChange('home')
						}}
					>
						<p className="f6 link dim ba ph3 pv2 mb2 dib white">Sign Out</p>
					</div>
				) : (
						<div onClick={() => onRouteChange('signin')}>
							<p className="f6 link dim ba ph3 pv2 mb2 dib white">Sign In</p>
						</div>
					)}
			</nav>
		</header>
	)
}

export default Navigation
