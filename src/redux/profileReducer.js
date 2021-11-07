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
            state.post.push({ id: 3, message: newPost, like: 0 });
            return state;
        case UPDETE_NEW_POST_TEXT:
            state.newProfile = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const newPostTextActionCreator = (text) => ({ type: UPDETE_NEW_POST_TEXT, newText: text });

export default profileReducer;