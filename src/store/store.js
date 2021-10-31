const ADD_POST = 'ADD_POST';
const UPDETE_NEW_POST_TEXT = 'UPDETE_NEW_POST_TEXT';

let store = {
    _collSubscribe() {
        console.log();
    },
    _state: {
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
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._collSubscribe = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.ProfileContent.newProfile,
                like: 0
            };
            this._state.ProfileContent.post.push(newPost);
            //this._state.ProfileContent.newProfile = '';
            this._collSubscribe(this._state);
        } else if (action.type === UPDETE_NEW_POST_TEXT) {
            this._state.ProfileContent.newProfile = action.newText;
            this._collSubscribe(this._state);
        }
    },
}

export const addPostActionCreator = ()=>({ type: ADD_POST })
export const newPOstTextActionCreator = (text)=>({ type: UPDETE_NEW_POST_TEXT, newText: text })

window.store = store;
export default store;

