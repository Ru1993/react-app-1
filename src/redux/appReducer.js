import { authMe } from "./authReducer";

const SET_INITIALASET = 'SET_INITIALASET';

let initialState = {
    initialaset: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALASET:
            return {
                ...state,
                initialaset: true
            }
        default:
            return state;
    }

}

export const setInitialaset = () => ({ type: SET_INITIALASET });

export const initialasetApp = () => (dispatch) => {
    let promise = dispatch(authMe());

    Promise.all([promise])
    .then(()=>{
        dispatch(setInitialaset());
    })
   
}



export default appReducer;