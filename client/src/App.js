import React, { Component } from 'react'
import { connect } from 'react-redux'
import { isChecked } from './selectors/auth'

export class App extends Component {
	render() {
		console.log(this.props)
		return (
			<div>
				<h1>hello react</h1>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	isChecked: isChecked(state)
})

export default connect(
	mapStateToProps
)(App)