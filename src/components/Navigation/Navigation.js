import React from 'react'
import Logo from '../Logo/Logo'
import './Navigation.css'

const Navigation = () => {
	return (
		<header className="nav">
			<nav className="logo">
				<div>
					<Logo />
				</div>
			</nav>
			<nav className="rightnav">
				<div>
					<a href="#signin">Sign Out</a>
				</div>
			</nav>
		</header>
	)
}

export default Navigation
