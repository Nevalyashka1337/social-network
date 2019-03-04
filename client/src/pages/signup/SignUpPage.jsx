import React from 'react'
import NavBar from '../../components/nav-bar'

function SignUpPage({ submitForm, handleInput, error }) {
	return (
		<div>
			<NavBar/>
			<h1>sign up</h1>
			<form onSubmit={submitForm}>
				<input type="text" placeholder="username" name="username" onChange={handleInput}/>
				<input type="text" placeholder="password" name="password" onChange={handleInput}/>
				<input type="submit" value="sign up"/>
			</form>
			{error && <p className="color-red">{error}</p>}
		</div>
	)
}

export default SignUpPage
