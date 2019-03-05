import React from 'react'

function SignInPage({ submitForm, handleInput, error, username, password }) {
	return (
		<div>
			<h1>sign in</h1>
			<form onSubmit={submitForm}>
				<input type="text" placeholder="username" name="username" onChange={handleInput} value={username}/>
				<input type="text" placeholder="password" name="password" onChange={handleInput} value={password}/>
				<input type="submit" value="sign in"/>
			</form>
			{error && <p className="color-red">{error}</p>}
		</div>
	)
}

export default SignInPage