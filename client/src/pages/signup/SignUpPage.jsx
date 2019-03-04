import React, { Component } from 'react'
import NavBar from '../../components/nav-bar'
import { connect } from 'react-redux'
import { signUp } from '../../actions/auth'

export class SignUpPage extends Component {

	state = {
		username: '',
		password: ''
	}

	handleInput = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	submitForm = e => {
		e.preventDefault()
		const { username, password } = this.state
		this.props.signUp(username, password)
	}

	render() {
		return (
			<div>
				<NavBar/>
				<h1>sign up</h1>
				<form onSubmit={this.submitForm}>
					<input type="text" placeholder="username" name="username" onChange={this.handleInput}/>
					<input type="text" placeholder="password" name="password" onChange={this.handleInput}/>
					<input type="submit" value="sign up"/>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth
})

const mapDispatchToProps = dispatch => ({
	signUp: (username, password) => {
		dispatch(signUp(username, password))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUpPage)
