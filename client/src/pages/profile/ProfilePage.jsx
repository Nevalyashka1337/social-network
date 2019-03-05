import React from 'react'

function ProfilePage({ user }) {
	return (
		<div>
			<h1>Profile: {user.username}</h1>
		</div>
	)
}

export default ProfilePage
