import React from 'react'

function ProfilePage({ user, isMe }) {
	return (
		<div>
			<h1>Profile: {user.username}</h1>
			{ isMe && <p>and... it's me</p> }
		</div>
	)
}

export default ProfilePage
