import React from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../../components/preloader'

function UsersPage({ users, isLoading }) {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col text-center">
						<h2>user list</h2>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-6">
						{ isLoading && <Preloader/>}
						{ !isLoading && getUserList(users)}
					</div>
				</div>
			</div>
		</>
	)
}

function getUserList(users) {
	return (
		<ul className="list-group">
			{users.map(user => {
				const { _id, username } = user
				return <li key={_id} className="list-group-item"><Link to={`/${username}`}>{username}</Link></li>
			})}
		</ul>
	)
}

export default UsersPage