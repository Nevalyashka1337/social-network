import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar({ isAuth, username }) {
	const authNavBar = () => (
		<>
			<li className="navbar__item"><Link to={`/${username}`}>me</Link></li>
			<li className="navbar__item"><Link to="/users">users</Link></li>
		</>
	)

	const notAuthNavBar = () => (
		<>
			<li className="navbar__item"><Link to="/">home</Link></li>
			<li className="navbar__item"><Link to="/account/signin">signin</Link></li>
			<li className="navbar__item"><Link to="/account/signup">signup</Link></li>
		</>
	)

	return (
		<ul className="navbar">
			{ isAuth ? authNavBar() : notAuthNavBar() }
		</ul>
	)
}

export default NavBar