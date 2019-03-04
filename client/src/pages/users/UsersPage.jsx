import React from 'react'
import NavBar from '../../components/nav-bar'
import { Link } from 'react-router-dom'

function UsersPage({ users }) {
	return (
		<>
			<NavBar/>
			<h1>Users List</h1>
			{getUserList(users)}
		</>
	)
}

function getUserList(users) {
	return (
		<ul>
			{users.map(user => {
				const { _id, username } = user
				return <li key={_id}><Link to={`/${username}`}>{username}</Link></li>
			})}
		</ul>
	)
}

export default UsersPage