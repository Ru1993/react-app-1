const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
    dialog: [
        { id: 1, name: 'Conor' },
        { id: 2, name: 'Mari' }
    ],
    message: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Ky' }
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let Message = action.newMessage;
            return {
                ...state,
                message: [...state.message, { id: 3, message: Message }]
            }
        default:
            return state;
    }

}

export const addMessage = (newMessage) => ({ type: ADD_MESSAGE, newMessage });

export default dialogsReducer;