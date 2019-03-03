import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuth } from '../selectors/auth'

function NavBar({ isAuth }) {
	const authNavBar = () => (
		<>
			<li className="navbar__item"><Link to="/users">users</Link></li>
		</>
	)

	const notAuthNavBar = () => (
		<>
			<li className="navbar__item"><Link to="/">home</Link></li>
			<li className="navbar__item"><Link to="/signin">signin</Link></li>
			<li className="navbar__item"><Link to="/signup">signup</Link></li>
		</>
	)

	return (
		<>
			<ul className="navbar">
				{ isAuth ? authNavBar() : notAuthNavBar() }
			</ul>
		</>
	)
}

const mapStateToProps = state => ({
	isAuth: isAuth(state)
})

export default connect(
	mapStateToProps
)(NavBar)