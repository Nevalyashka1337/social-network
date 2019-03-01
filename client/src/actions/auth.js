import api from '../api/auth'
import * as t from '../constants/auth'

export const checkAuth = () =>  dispatch => {
	dispatch({ type: t.CHECK_AUTH_REQUEST })
	api.checkAuth().then(() => {
		dispatch({ type: t.CHECK_AUTH_SUCCESS })
	}).catch(() => {
		dispatch({ type: t.CHECK_AUTH_FAILURE })
	})
}