import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ProfilePage from './ProfilePage'
import { fetchUser } from '../../actions/user'
import Preloader from '../../components/preloader'
import NotFound from '../not-found'

export class ProfileContainer extends Component {
	
	componentDidMount() {
		this.props.fetchUser(this.props.username)
	}

	componentDidUpdate(prevProps) {
		if ( prevProps.username !== this.props.username ) {
			this.props.fetchUser(this.props.username)
		}
	}

	render() {
		const { isAuth, me, isLoading, user } = this.props
		if ( !isAuth ) return <Redirect to='/account/signin'/>
		if ( isLoading ) return <Preloader/>
		return !user.username ? <NotFound/> : <ProfilePage isAuth={isAuth} myUsername={me.username} user={user}/>
	}
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	me: state.auth.me,
	isLoading: state.user.isLoading,
	user: state.user.user
})

const mapDispatchToProps = dispatch => ({
	fetchUser: username => {
		dispatch(fetchUser(username))
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProfileContainer)