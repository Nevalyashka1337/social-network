import React, { Component } from 'react'
import NavBar from '../../components/nav-bar'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/users'
import { Link } from 'react-router-dom'
import Preloader from '../../components/preloader'

export class UsersPage extends Component {
	componentDidMount() {
		this.props.fetchUsers()
	}

	getBody = () => {
		const { isFetching, users, error } = this.props
		if ( isFetching ) {
			return <Preloader/>
		} else if (error) {
			return (<p>ERROR</p>)
		} else {
			if ( users.length > 0 ) {
				return (
					<ul>
						{users.map(user => {
							const { _id, username } = user
							return <li key={_id}><Link to={`/${username}`}>{username}</Link></li>
						})}
					</ul>
				)
			} else {
				return (<p>users not found</p>)
			}
		}
	}

	render() {
		return (
			<>
				<NavBar/>
				<h1>Users List</h1>
				{this.getBody()}
			</>
		)
	}
}

const mapStateToProps = state => ({
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
)(UsersPage)
