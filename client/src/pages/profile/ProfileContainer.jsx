import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProfilePage from './ProfilePage'
import { fetchUser } from '../../actions/user'
import Preloader from '../../components/preloader'
import NotFound from '../../components/not-found'

export class ProfileContainer extends Component {
	
	componentDidMount() {
		const { match: { params : { username } } } = this.props
		this.props.fetchUser(username)
	}

	componentDidUpdate(prevProps) {
		if ( prevProps.username !== this.props.username || prevProps.keyPage !== this.props.keyPage ) {
			const { match: { params : { username } } } = this.props
			this.props.fetchUser(username)
		}
	}

	render() {
		const {
			isLoading,
			user,
			me,
			match: { params : { username: searchUsrname } }
		} = this.props
		
		if ( isLoading ) {
			return <Preloader/>
		} else if ( user !== null && user.username === searchUsrname ) {
			if ( me.username === searchUsrname ) return <ProfilePage user={me} isMe/>
			else return <ProfilePage user={user}/>
		} else {
			return <NotFound/>
		}
	}
}

const mapStateToProps = state => ({
	isLoading: state.user.isLoading,
	user: state.user.user,
	keyPage: state.router.location.key,
	me: state.auth.me,
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