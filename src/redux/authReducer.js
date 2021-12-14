import { stopSubmit } from "redux-form";
import { auth } from "../API/api";

const SET_AUTH_LOGIN = 'SET_AUTH_LOGIN';

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_LOGIN:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }

}

export const setAuthUserData = (email, id, login, isAuth) => ({ type: SET_AUTH_LOGIN, data: { email, id, login, isAuth } });

export const authMe = () => {
    return (dispatch) => {
        auth.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { email, id, login } = response.data.data;
                    dispatch(setAuthUserData(email, id, login, true));
                }
            })
    }
}

export const login = (email, password, rememberMe) => (dispatch) => {
    auth.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authMe());
            } else {
                let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'error';
                dispatch(stopSubmit('login', { _error: messages }));
            }
        })
}


export const logout = () => (dispatch) => {
    auth.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}


export default authReducer;