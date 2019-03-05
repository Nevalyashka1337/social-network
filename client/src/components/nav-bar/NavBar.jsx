import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { connect } from 'react-redux'
import { signOut } from '../../actions/auth'

function NavBar({ me, isAuth, signOut }) {
	const authNavBar = () => (
		<>
			<li className="navbar__item"><Link to={`/${me.username}`}>me</Link></li>
			<li className="navbar__item"><Link to="/users">users</Link></li>
			<li className="navbar__item" onClick={() => signOut()}><Link to="/">signout</Link></li>
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

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	me: state.auth.me
})

const mapDispatchToProps = dispatch => ({
	signOut: () => {
		dispatch(signOut())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavBar)