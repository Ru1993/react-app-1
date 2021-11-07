import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

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
        },
        Sidebar: {}
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._collSubscribe = observer;
    },

    dispatch(action) {

        this._state.ProfileContent = profileReducer(this._state.ProfileContent, action);
        this._state.DialogsContent = dialogsReducer(this._state.DialogsContent, action);
        this._state.Sidebar = sidebarReducer();

        this._collSubscribe(this._state);
    },
}

window.store = store;
export default store;

