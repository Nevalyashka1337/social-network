import * as t from '../constants/auth'

export const initState = {
	isAuth: false,
	isChecked: false,
	me: null
}

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case t.CHECK_AUTH_FAILURE:
			return { ...state, isChecked: true }
		case t.CHECK_AUTH_SUCCESS:
			return { ...state, isChecked: true, isAuth: true, me: action.payload }
		case t.SIGNIN_SUCCESS:
		case t.SIGNUP_SUCCESS:
			return { ...state, isAuth: true, me: action.payload }
		case t.SIGNIN_FAILURE:
		case t.SIGNUP_FAILURE:
			return { ...state, isAuth: false, me: null }
		default:
			return state
	}
}

export default authReducer