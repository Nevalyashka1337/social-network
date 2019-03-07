import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkAuth } from '../actions/auth'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/home'
import ProfilePage from '../pages/profile'
import UsersPage from '../pages/users'
import SignInPage from '../pages/signin'
import SignUpPage from '../pages/signup'
import NotFound from '../components/not-found'
import Preloader from '../components/preloader'
import NavBar from '../components/nav-bar'
import { withRouter } from 'react-router-dom'
import AuthRoute from '../components/AuthRoute'

export class App extends Component {
	componentDidMount() {
		this.props.checkAuth()
	}

	routes = () => (
		<Fragment>
			<NavBar />
			<Switch>
				<Route path='/' exact render={() => <HomePage/>} />
				<AuthRoute path='/users' redirect='/account/signin' exact component={UsersPage}/>
				<AuthRoute path='/account/signin' redirect='/' exact reverse component={SignInPage}/>
				<AuthRoute path='/account/signup' redirect='/' exact reverse component={SignUpPage}/>
				<AuthRoute path='/:username' redirect='/account/signin' exact component={ProfilePage}/>
				<Route component={NotFound}/>
			</Switch>
		</Fragment>
	)

	render() {
		const { isChecked } = this.props
		return isChecked ? this.routes() : <Preloader/>
	}
}

const mapStateToProps = state => ({
	isAuth: state.auth.isAuth,
	isChecked: state.auth.isChecked
})

const mapDispatchToProps = dispatch => bindActionCreators({
	checkAuth
}, dispatch)

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(App))