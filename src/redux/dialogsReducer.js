const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDETE_NEW_MESSAGE_TEXT = 'UPDETE_NEW_MESSAGE_TEXT';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = state.newDialog;
            state.message.push({ id: 3, message: newMessage });
            return state;
        case UPDETE_NEW_MESSAGE_TEXT:
            state.newDialog = action.newText;
            return state;
        default:
            return state;
    }

}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const newMessageTextActionCreator = (text) => ({ type: UPDETE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;