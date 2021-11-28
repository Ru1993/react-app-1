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
            return {
                ...state,
                message: [...state.message, { id: 3, message: newMessage }]
            };
        case UPDETE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newDialog: action.newText
            };
        default:
            return state;
    }

}

export const addMessage = () => ({ type: ADD_MESSAGE });
export const newMessage = (text) => ({ type: UPDETE_NEW_MESSAGE_TEXT, newText: text });

export default dialogsReducer;