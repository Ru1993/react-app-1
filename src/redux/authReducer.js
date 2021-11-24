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
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }

}

export const setAuthUserData = (email, id, login) => ({ type: SET_AUTH_LOGIN, data: {email, id, login} });

export const authMe = ()=>{
    return (dispatch) =>{
        auth.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { email, id, login } = response.data.data;
                    dispatch(setAuthUserData(email, id, login));
                }
            })
    }
}

export default authReducer;