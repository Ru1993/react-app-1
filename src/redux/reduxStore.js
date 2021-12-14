import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './authReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';

let reducers = combineReducers({
    ProfileContent: profileReducer,
    DialogsContent: dialogsReducer,
    Sidebar: sidebarReducer,
    UsersContent: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;