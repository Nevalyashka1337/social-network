import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
	return (
		<div className="container text-center">
			<div className="row">
				<div className="col">
					<h1>welcome</h1>
				</div>
			</div>
			<h4>you are not logged in</h4>
			<p>please go to <Link to='/account/signin'>/account/signin</Link> if you are registered or <Link to='/account/signup'>/account/signup</Link> if you want to register</p>
		</div>
	)
}

export default HomePage