import * as t from '../constants/user'
import api from '../api/user'

export const fetchUser = username => dispatch => {
	dispatch({ type: t.FETCH_USER_REQUEST })
	api.getUser(username).then(user => {
		dispatch({ type: t.FETCH_USER_SUCCESS, payload: user })
	}).catch(() => {
		dispatch({ type: t.FETCH_USER_FAILURE })
	})
}