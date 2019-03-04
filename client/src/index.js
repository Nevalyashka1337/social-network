import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import { Provider } from 'react-redux'
import { configStore, history } from './store'
import { ConnectedRouter } from 'connected-react-router'

const Render = Component => {
	ReactDOM.render(
	<Provider store={configStore()}>
		<ConnectedRouter history={history}>
			<Component/>
		</ConnectedRouter>
	</Provider>
	, document.getElementById('root'))
}

Render(App)

if ( module.hot ) {
	module.hot.accept('./app', () => {
		const NextApp = require('./app').default
		Render(NextApp)
	})
}