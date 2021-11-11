const ADD_POST = 'ADD_POST';
const UPDETE_NEW_POST_TEXT = 'UPDETE_NEW_POST_TEXT';

let initialState = {
    post: [
        { id: 1, message: "Hello", like: 2 },
        { id: 2, message: 'Cool', like: 4 }
    ],
    newProfile: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = state.newProfile;
            return {
                ...state,
                newProfile: '',
                post: [...state.post, { id: 3, message: newPost, like: 0 }]
            };
        case UPDETE_NEW_POST_TEXT:
            return {
                ...state,
                newProfile: action.newText
            };
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const newPostTextActionCreator = (text) => ({ type: UPDETE_NEW_POST_TEXT, newText: text });

export default profileReducer;