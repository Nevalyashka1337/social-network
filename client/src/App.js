import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { isChecked } from './selectors/auth'
import { checkAuth } from './actions/auth'
import { Switch, Route } from 'react-router-dom'
import HomePage from './containers/HomePage'
import './styles/App.css'

export class App extends Component {
	componentDidMount() {
		this.props.checkAuth()
	}

	preloader = () => (<p>loading...</p>)

	routes = () => (
		<Switch>
			<Route path='/' exact render={() => <HomePage/>}/>
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

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)