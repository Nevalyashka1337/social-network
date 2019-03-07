import React from 'react'

function ProfilePage({ user, isMe }) {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<h1 className="display-4">{user.username}</h1>
				</div>
			</div>
			<div className="row">
				<div className="col">
					{ isMe && <p>and... it's me</p> }
				</div>
			</div>
		</div>
	)
}

export default ProfilePage
