import * as t from '../constants/users'

export const initState = {
	users: [],
	isLoading: false,
	error: false
}

const usersReducer = (state = initState, action) => {
	switch (action.type) {
		case t.FETCH_USERS_REQUEST:
			return { ...state, isLoading: true, users: [], error: false }
		case t.FETCH_USERS_SUCCESS:
			return { ...state, users: action.payload, isLoading: false, error: false }
		case t.FETCH_USERS_FAILURE:
			return { ...state, isLoading: false, error: true, users: [] }
		default:
			return state
	}
}

export default usersReducer