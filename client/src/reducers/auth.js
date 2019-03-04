import * as t from '../constants/auth'

export const initState = {
	isAuth: false,
	isChecked: false,
	me: null,
	errors: {
		signin: '',
		signup: ''
	}
}

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case t.CHECK_AUTH_FAILURE:
			return { ...state, isChecked: true }
		case t.CHECK_AUTH_SUCCESS:
			return { ...state, isChecked: true, isAuth: true, me: action.payload }
		case t.SIGNIN_SUCCESS:
		return { ...state, isAuth: true, me: action.payload }
		case t.SIGNUP_SUCCESS:
			return { ...state, isAuth: true, me: action.payload }
		case t.SIGNIN_FAILURE:
		return { ...state, isAuth: false, me: null, errors: { ...state.errors, signin: action.payload } }
		case t.SIGNUP_FAILURE:
			return { ...state, isAuth: false, me: null, errors: { ...state.errors, signup: action.payload }  }
		case '@@router/LOCATION_CHANGE':
			return { ...state, errors: { signin: '', signup: '' } }
		default:
			return state
	}
}

export default authReducer