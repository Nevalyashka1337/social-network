import React, { Component } from 'react'
import UsersPage from './UsersPage'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/users'
import { Redirect } from 'react-router-dom'

export class UsersContainer extends Component {
	
	componentDidMount() {
		this.props.fetchUsers()
	}

	render() {
		const { isLoading, users, isAuth } = this.props
		if ( !isAuth ) return <Redirect to='/'/>
		return <UsersPage users={users} isLoading={isLoading} />
	}
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	users: state.users.users,
	isLoading: state.users.isLoading
})

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchUsers
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersContainer)
