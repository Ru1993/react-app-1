import { profileAPI, usersAPI } from "../API/api";
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_SAVE_PHOTO = 'SET_SAVE_PHOTO';

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
        case SET_SAVE_PHOTO:
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        default:
            return state;
    }

}

export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const newProfile = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setSavePhoto = (photos) => ({ type: SET_SAVE_PHOTO, photos });

export const profileUser = (userId) => async (dispatch) => {
    let response = await usersAPI.profile(userId)

    dispatch(setUsersProfile(response.data));
}

export const getStatusProfile = (userId) => async (dispatch) => {

    let response = await profileAPI.getStatus(userId);

    dispatch(setStatus(response.data));

}

export const setUpdateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.setStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        console.log(error)
    }
}

export const savePhoto = (photoFiles) => async (dispatch) => {
    let response = await profileAPI.savePhoto(photoFiles);

    if (response.data.resultCode === 0) {
        dispatch(setSavePhoto(response.data.data.photos));
    }
}

export const saveFormData = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    let response = await profileAPI.saveFormData(profile);
    if (response.data.resultCode === 0) {
        dispatch(profileUser(userId));
    } else {
        dispatch(stopSubmit('editProfile', { _error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;