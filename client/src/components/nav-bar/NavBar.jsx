import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { connect } from 'react-redux'

function NavBar(props) {
	const authNavBar = () => (
		<>
			<li className="navbar__item"><Link to={`/${props.me.username}`}>me</Link></li>
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
			{ props.isAuth ? authNavBar() : notAuthNavBar() }
		</ul>
	)
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	me: state.auth.me
})

export default connect(
	mapStateToProps
)(NavBar)