import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../actions/auth'
import SignUpPage from './SignUpPage'

export class SignUpContainer extends Component {

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
		return <SignUpPage submitForm={this.submitForm} handleInput={this.handleInput} error={this.props.signUpError}/>
	}
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	signUpError: state.auth.errors.signup
})

const mapDispatchToProps = dispatch => ({
	signUp: (username, password) => {
		dispatch(signUp(username, password))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUpContainer)
