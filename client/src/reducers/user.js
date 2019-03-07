import * as t from '../constants/user'

export const initState = {
	user: {},
	isLoading: true
}

const usersReducer = (state = initState, action) => {
	switch (action.type) {
		case t.FETCH_USER_REQUEST:
			return { ...state, isLoading: true, user: {} }
		case t.FETCH_USER_SUCCESS:
			return { ...state, isLoading: false, user: action.payload }
		case t.FETCH_USER_FAILURE:
			return { ...state, isLoading: false, user: {} }
		default:
			return state
	}
}

export default usersReducer