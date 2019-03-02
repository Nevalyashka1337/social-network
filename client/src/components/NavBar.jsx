import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
	return (
		<>
			<ul className="navbar">
				<li className="navbar__item"><Link to="/">home</Link></li>
				<li className="navbar__item"><Link to="/users">users</Link></li>
				<li className="navbar__item"><Link to="/signin">signin</Link></li>
			</ul>
		</>
	)
}

export default NavBar
