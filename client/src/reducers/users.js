import * as t from '../constants/users'

export const initState = {
	users: [],
	isLoading: true
}

const usersReducer = (state = initState, action) => {
	switch (action.type) {
		case t.FETCH_USERS_REQUEST:
			return { ...state, isLoading: true, users: [] }
		case t.FETCH_USERS_SUCCESS:
			return { ...state, isLoading: false, users: action.payload }
		case t.FETCH_USERS_FAILURE:
			return { ...state, isLoading: false, users: [] }
		default:
			return state
	}
}

export default usersReducer