import { profileAPI, usersAPI } from "../API/api";

const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    post: [
        { id: 1, message: "Hello", like: 2 },
        { id: 2, message: 'Cool', like: 4 }
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = action.newPostText;
            return {
                ...state,
                post: [...state.post, { id: 3, message: newPost, like: 0 }]
            }
        case SET_STATUS:
            return { ...state, status: action.status }
        case SET_USERS_PROFILE:
            return { ...state, profile: action.profile }
        case DELETE_POST:
            return { ...state, post: state.post.filter(p => p.id != action.postId) }
        default:
            return state;
    }

}

export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const newProfile = (newPostText) => ({ type: ADD_POST, newPostText });
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