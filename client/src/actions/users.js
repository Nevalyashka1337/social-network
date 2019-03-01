import api from '../api/users'
import * as t from '../constants/users'

export const fetchUsers = () =>  dispatch => {
	dispatch({ type: t.FETCH_USERS_REQUEST })
	api.getUsers().then(users => {
		dispatch({ type: t.FETCH_USERS_SUCCESS, payload: users })
	}).catch(() => {
		dispatch({ type: t.FETCH_USERS_FAILURE })
	})
}