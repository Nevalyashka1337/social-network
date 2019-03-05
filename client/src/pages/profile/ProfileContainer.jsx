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
		if ( prevProps.username !== this.props.username || prevProps.keyPage !== this.props.keyPage ) {
			this.props.fetchUser(this.props.username)
		}
	}

	render() {
		const { isAuth, isLoading, user } = this.props
		if ( !isAuth ) return <Redirect to='/account/signin'/>
		if ( isLoading ) return <Preloader/>
		return !user.username ? <NotFound/> : <ProfilePage user={user}/>
	}
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	isLoading: state.user.isLoading,
	user: state.user.user,
	keyPage: state.router.location.key
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