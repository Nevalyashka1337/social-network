import React, { Component } from 'react'
import UsersPage from './UsersPage'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/users'
import Preloader from '../../components/preloader'
import { Redirect } from 'react-router-dom'

export class UsersContainer extends Component {
	
	componentDidMount() {
		this.props.fetchUsers()
	}

	render() {
		const { isFetching, users, error, isAuth } = this.props
		if ( !isAuth ) return <Redirect to='/'/>
		if ( isFetching ) return <Preloader/>
		if ( error ) return <p>ERROR</p>
		return <UsersPage users={users} isAuth={isAuth}/>
	}
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	users: state.users.users,
	isLoading: state.users.isLoading,
	error: state.users.error
})

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchUsers
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersContainer)
