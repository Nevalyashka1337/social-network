import React, { Component } from 'react'
import HomePage from './HomePage'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class HomeContainer extends Component {
	render() {
		const { isAuth, me } = this.props
		return isAuth ? <Redirect to={`/${me.username}`}/> :
		<HomePage isAuth={isAuth}/>
	}
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	me: state.auth.me
})

export default connect(
	mapStateToProps
)(HomeContainer)