import * as t from '../constants/auth'

export const initState = {
	isAuth: false,
	isChecked: false
}

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case t.CHECK_AUTH_SUCCESS:
			return { ...state, isAuth: true, isChecked: true }
		case t.CHECK_AUTH_FAILURE:
			return { ...state, isChecked: true }
		default:
			return state
	}
}

export default authReducer