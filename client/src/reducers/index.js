import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import user from './user'
import users from './users'

export default (history) => combineReducers({
	router: connectRouter(history),
	auth,
	users,
	user
})