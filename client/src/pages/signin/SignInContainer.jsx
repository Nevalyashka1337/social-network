import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignInPage from './SignInPage'
import { signIn } from '../../actions/auth'

export class SignInContainer extends Component {
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
		this.props.signIn(username, password)
	}

	render() {
		const { signInError, isAuth } = this.props
		return <SignInPage
		handleInput={this.handleInput}
		submitForm={this.submitForm}
		error={signInError}
		isAuth={isAuth} />
	}
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	signInError: state.auth.errors.signin
})

const mapDispatchToProps = dispatch => ({
	signIn: (username, password) => {
		dispatch(signIn(username, password))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignInContainer)
