import api from '../api/auth'
import * as t from '../constants/auth'

export const checkAuth = () =>  dispatch => {
	dispatch({ type: t.CHECK_AUTH_REQUEST })
	api.checkAuth().then(me => {
		dispatch({ type: t.CHECK_AUTH_SUCCESS, payload: me })
	}).catch(() => {
		dispatch({ type: t.CHECK_AUTH_FAILURE })
	})
}

export const signIn = (username, password) => dispatch => {
	dispatch({ type: t.SIGNIN_REQUEST })
	api.signin(username, password).then(me => {
		dispatch({ type: t.SIGNIN_SUCCESS, payload: me })
	}).catch(() => {
		dispatch({ type: t.SIGNIN_FAILURE })
	})
}