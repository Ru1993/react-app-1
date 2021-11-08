import { addPostActionCreator, newPostTextActionCreator } from "../../redux/profileReducer";
import Profile from './Profile';

const ProfileContainer = (props) => {

    let state = props.store.getState().ProfileContent.post;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let newPost = (text) => {
        props.store.dispatch(newPostTextActionCreator(text));
    }

    return (
        <Profile newProfile={addPost} newPost={newPost} 
        post={state} />
    );
}

export default ProfileContainer;