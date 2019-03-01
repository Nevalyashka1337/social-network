import React, { Component } from 'react'
import NavBar from '../components/NavBar'

export class UsersPage extends Component {
	render() {
		return (
			<>
				<NavBar/>
				<h1>Users List</h1>
				<ul>
					<li><a href="/">vano</a></li>
					<li><a href="/">ivan</a></li>
				</ul>
			</>
		)
	}
}

export default UsersPage
