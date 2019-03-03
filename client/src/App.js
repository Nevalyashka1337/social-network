import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isChecked } from './selectors/auth'
import { checkAuth } from './actions/auth'
import { Switch, Route } from 'react-router-dom'
import HomePage from './containers/HomePage'
import UsersPage from './containers/UsersPage'
import SignInPage from './containers/SignInPage'
import SignUpPage from './containers/SignUpPage'
import NotFound from './components/NotFound'
import './styles/App.css'
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