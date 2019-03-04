import React, { Component } from 'react'
import HomePage from './HomePage'
import { connect } from 'react-redux'

export class HomeContainer extends Component {
	render() {
		const { isAuth } = this.props
		return <HomePage isAuth={isAuth}/>
	}
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth
})

export default connect(
	mapStateToProps
)(HomeContainer)