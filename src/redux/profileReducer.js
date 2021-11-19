const ADD_POST = 'ADD_POST';
const UPDETE_NEW_POST_TEXT = 'UPDETE_NEW_POST_TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    post: [
        { id: 1, message: "Hello", like: 2 },
        { id: 2, message: 'Cool', like: 4 }
    ],
    newProfile: '',
    profile: null
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
        case UPDETE_NEW_POST_TEXT:
            return { ...state, newProfile: action.newText }
        case SET_USERS_PROFILE:
            return { ...state, profile: action.profile }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const newPostTextActionCreator = (text) => ({ type: UPDETE_NEW_POST_TEXT, newText: text });
export const setUsersProfile = (profile) => ({ type: SET_USERS_PROFILE, profile });

export default profileReducer;