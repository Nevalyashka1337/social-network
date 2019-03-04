import React from 'react'
import NavBar from '../../components/nav-bar'
import { Link } from 'react-router-dom'
import Preloader from '../../components/preloader'

function UsersPage({ users, isAuth, isLoading, username }) {
	return (
		<>
			<NavBar isAuth={isAuth} username={username}/>
			<h1>Users List</h1>
			{ isLoading && <Preloader/>}
			{ !isLoading && getUserList(users)}
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