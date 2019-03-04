import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isChecked } from '../../selectors/auth'
import { checkAuth } from '../../actions/auth'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/home'
import UsersPage from '../pages/users'
import SignInPage from '../pages/signin'
import SignUpPage from '../pages/signup'
import NotFound from '../pages/not-found'
import '../../styles/App.css'
import { withRouter } from 'react-router-dom'

export class App extends Component {
	componentDidMount() {
		this.props.checkAuth()
	}

	preloader = () => (<p>loading...</p>)

	routes = () => (
		<Switch>
			<Route path='/' exact render={() => <HomePage/>} />
			<Route path='/users' exact render={() => <UsersPage/>} />
			<Route path='/account/signin' exact render={() => <SignInPage/>} />
			<Route path='/account/signup' exact render={() => <SignUpPage/>} />
			<Route component={NotFound}/>
		</Switch>
	)

	render() {
		const { isChecked } = this.props
		return isChecked ? this.routes() : this.preloader()
	}
}

const mapStateToProps = state => ({
	isChecked: isChecked(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
	checkAuth
}, dispatch)

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(App))