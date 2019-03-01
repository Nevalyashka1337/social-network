import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/users'
import { users, isFetching } from '../selectors/users'
import { Link } from 'react-router-dom'

export class UsersPage extends Component {
	componentDidMount() {
		this.props.fetchUsers()
	}

	getBody = () => {
		const { isFetching, users } = this.props
		if ( isFetching ) {
			return (<p>loading...</p>)
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
	users: users(state),
	isFetching: isFetching(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchUsers
}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UsersPage)