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
		return <SignInPage handleInput={this.handleInput} submitForm={this.submitForm}/>
	}
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth
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
