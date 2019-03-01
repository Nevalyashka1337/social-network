import React, { Component } from 'react'
import NavBar from '../components/NavBar'

export class HomePage extends Component {
	render() {
		return (
			<div>
				<NavBar/>
				<h1>welcome</h1>
				<p>you are not authorized</p>
			</div>
		)
	}
}

export default HomePage
