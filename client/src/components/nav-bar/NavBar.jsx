import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../actions/auth'

function NavBar({ me, isAuth, signOut }) {
	const authNavBar = () => (
		<>
			<li className="nav-item"><Link className="nav-link" to={`/${me.username}`}>Profile</Link></li>
			<li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
			<li className="nav-item" onClick={() => signOut()}><Link className="nav-link" to="/">Sign out</Link></li>
		</>
	)

	const notAuthNavBar = () => (
		<>
			<li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
			<li className="nav-item"><Link className="nav-link" to="/account/signin">Sign in</Link></li>
			<li className="nav-item"><Link className="nav-link" to="/account/signup">Sign up</Link></li>
		</>
	)
	
	return (
		<div className="container mb-3">
			<div className="row">
				<div className="col">
					<ul className="nav justify-content-center">
						{ isAuth ? authNavBar() : notAuthNavBar() }
					</ul>
				</div>
			</div>
		</div>
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