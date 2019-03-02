import * as t from '../constants/users'

export const initState = {
	users: [],
	isFetching: false,
	error: false
}

const usersReducer = (state = initState, action) => {
	switch (action.type) {
		case t.FETCH_USERS_REQUEST:
			return { ...state, isFetching: true }
		case t.FETCH_USERS_SUCCESS:
			return { ...state, users: action.payload, isFetching: false }
		case t.FETCH_USERS_FAILURE:
			return { ...state, isFetching: false, error: true }
		default:
			return state
	}
}

export default usersReducer