import React from 'react'
import NavBar from '../../components/nav-bar'

function HomePage({ isAuth }) {
	return (
		<div>
			<NavBar isAuth={isAuth}/>
			<h1>welcome</h1>
		</div>
	)
}

export default HomePage