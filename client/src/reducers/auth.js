import * as t from '../constants/auth'

export const initState = {
	isAuth: false,
	isChecked: false,
	me: null
}

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case t.CHECK_AUTH_REQUEST:
			return { ...state, isChecked: false }
		case t.CHECK_AUTH_SUCCESS:
			return { ...state, isAuth: true, isChecked: true, me: action.payload }
		case t.CHECK_AUTH_FAILURE:
			return { ...state, isChecked: true }
		case t.SIGNIN_SUCCESS:
			return { ...state, isAuth: true, me: action.payload }
		case t.SIGNIN_FAILURE:
			return { ...state, isAuth: false, me: null }
		default:
			return state
	}
}

export default authReducer