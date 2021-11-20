import { combineReducers, createStore } from 'redux';
import authReducer from './authReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    ProfileContent: profileReducer,
    DialogsContent: dialogsReducer,
    Sidebar: sidebarReducer,
    UsersContent: usersReducer,
    auth: authReducer
})

let store = createStore(reducers);

export default store;