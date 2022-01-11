import { authMe } from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }

}

export const setInitialled = () => ({ type: SET_INITIALIZED });

export const initialasetApp = () => (dispatch) => {
    let promise = dispatch(authMe());

    Promise.all([promise])
    .then(()=>{
        dispatch(setInitialled());
    })
   
}

export default appReducer;