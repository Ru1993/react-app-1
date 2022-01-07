import { stopSubmit } from "redux-form";
import { auth, securityAPI } from "../API/api";

const SET_AUTH_LOGIN = 'SET_AUTH_LOGIN';
const SET_CAPTCHA_SUCCESS = 'SET_CAPTCHA_SUCCESS';

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    captchaURL: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH_LOGIN:
            case SET_CAPTCHA_SUCCESS:
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }

}

export const setAuthUserData = (email, id, login, isAuth, captcha) => ({ type: SET_AUTH_LOGIN, data: { email, id, login, isAuth, captcha } });
export const setCaptchaSuccess = (captchaURL) => ({ type: SET_CAPTCHA_SUCCESS, data: { captchaURL } });

export const authMe = () => async (dispatch) => {
    const response = await auth.authMe()
    if (response.data.resultCode === 0) {
        let { email, id, login } = response.data.data;
        dispatch(setAuthUserData(email, id, login, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await auth.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(authMe());
    } else {
        if(response.data.resultCode === 10){
            dispatch(getSecurityURL());
        }
        let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'error';
        dispatch(stopSubmit('login', { _error: messages }));
    }
}

export const logout = () => async (dispatch) => {
    const response = await auth.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getSecurityURL = () => async (dispatch) => {
    const response = await securityAPI.getSecurityURL()
    const captchaURL = response.data.url;
    dispatch(setCaptchaSuccess(captchaURL));
}

export default authReducer;