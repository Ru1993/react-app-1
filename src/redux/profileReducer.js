import { profileAPI, usersAPI } from "../API/api";

const ADD_POST = 'ADD_POST';
const UPDETE_NEW_POST_TEXT = 'UPDETE_NEW_POST_TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    post: [
        { id: 1, message: "Hello", like: 2 },
        { id: 2, message: 'Cool', like: 4 }
    ],
    newProfile: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = state.newProfile;
            return {
                ...state,
                newProfile: '',
                post: [...state.post, { id: 3, message: newPost, like: 0 }]
            }
        case SET_STATUS:
            return { ...state, status: action.status }
        case UPDETE_NEW_POST_TEXT:
            return { ...state, newProfile: action.newText }
        case SET_USERS_PROFILE:
            return { ...state, profile: action.profile }
        default:
            return state;
    }

}

export const newProfile = () => ({ type: ADD_POST });
export const newPost = (text) => ({ type: UPDETE_NEW_POST_TEXT, newText: text });
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const profileUser = (userId) => {
    return (dispatch) => {
        usersAPI.prifile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data));
            })
    }
}

export const getStatusProfile = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        })
}

export const setUpdateStatus = (status) => (dispatch) => {
    profileAPI.setStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}


export default profileReducer;