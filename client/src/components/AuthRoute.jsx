import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const AuthRoute = ({ component: Component, redirect = '/', isAuth, reverse,...rest }) => {
	return (
		<Route {...rest} render={() => {
				if ( reverse ) return !isAuth ? <Component/> :  <Redirect to={redirect}/>
				else return isAuth ? <Component/> :  <Redirect to={redirect}/>
			}
		}/>
	)
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth
})

export default connect(
	mapStateToProps
)(AuthRoute)