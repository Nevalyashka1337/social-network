import React, { Component } from 'react'
import { connect } from 'react-redux'
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
		const { isLoading, user, me, username } = this.props
		let isMe
		if ( me !== null && me.username === username) isMe = true
		else isMe = false
		if ( isLoading ) return <Preloader/>
		return !user.username ? <NotFound/> : <ProfilePage user={user} isMe={isMe}/>
	}
}

const mapStateToProps = state => ({
	isLoading: state.user.isLoading,
	user: state.user.user,
	keyPage: state.router.location.key,
	me: state.auth.me
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