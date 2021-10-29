// const ADD_POST = 'ADD_POST';
// const UPDETE_NEW_POST_TEXT = 'UPDETE_NEW_POST_TEXT';

let rerenderEntireTree = () => {
    console.log();
}

let state = {
    ProfileContent: {
        post: [
            { id: 1, message: "Hello", like: 2 },
            { id: 2, message: 'Cool', like: 4 }
        ],
        newProfile: ''
    },
    DialogsContent: {
        dialog: [
            { id: 1, name: 'Conor' },
            { id: 2, name: 'Mari' }
        ],
        message: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'Ky' }
        ],
        newDialog: ''
    }
}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.ProfileContent.newProfile,
        like: 0
    };
    state.ProfileContent.post.push(newPost);
    state.ProfileContent.newProfile = '';
    rerenderEntireTree(state);
}

export let newPostText = (newText) => {
    state.ProfileContent.newProfile = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

//window.state = state;
export default state;

