import React from 'react'

function SignInPage({ submitForm, handleInput, error, username, password }) {
	return (
		<div className="container">
			<div className="row text-center">
				<div className="col">
					<h1>Sign in</h1>
				</div>
			</div>

			<div className="row justify-content-center mt-3">
				<form onSubmit={submitForm}>
					{error && <p className="text-danger">{error}</p>}
					<div className="form-group">
						<input type="text" className="form-control" placeholder="username" name="username" onChange={handleInput} value={username}/>
					</div>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="password" name="password" onChange={handleInput} value={password}/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">send</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default SignInPage