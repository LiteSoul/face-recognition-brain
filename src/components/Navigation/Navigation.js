import React from 'react'
import Logo from '../Logo/Logo'
import './Navigation.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {
	return (
		<header className="nav mw6 mw8-ns center">
			<nav className="logo">
				<div>
					<Logo />
				</div>
			</nav>
			<nav className="rightnav cf fr">
				{isSignedIn ? (
					<div
						className="cf fr pointer"
						onClick={() => { onRouteChange('home') }}
					>
						<p className="cf fr f6 link dim ba ph3 pv2 mb2 dib white">Sign Out</p>
					</div>
				) : (
						<div
							className="cf fr pointer"
							onClick={() => onRouteChange('signin')}
						>
							<p className="cf fr f6 link dim ba ph3 pv2 mb2 dib white">Sign In</p>
						</div>
					)}
			</nav>
		</header>
	)
}

export default Navigation
