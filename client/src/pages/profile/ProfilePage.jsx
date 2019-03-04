import React from 'react'
import NavBar from '../../components/nav-bar'

function ProfilePage({ isAuth, myUsername, user }) {
	return (
		<div>
			<NavBar isAuth={isAuth} username={myUsername}/>
			<h1>Profile: {user.username}</h1>
		</div>
	)
}

export default ProfilePage
