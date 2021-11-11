import { addPostActionCreator, newPostTextActionCreator } from "../../redux/profileReducer";
import MyPost from './MyPost/MyPost';
import { connect } from 'react-redux';

// const ProfileContainer = (props) => {

//     let state = props.store.getState().ProfileContent.post;

//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }

//     let newPost = (text) => {
//         props.store.dispatch(newPostTextActionCreator(text));
//     }

//     return (
//         <Profile newProfile={addPost} newPost={newPost}
//             post={state} />
//     );
// }

const mapStateToProps = (state) => {
    return {
        ProfileContent: state.ProfileContent,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        newProfile:()=>{
            dispatch(addPostActionCreator());
        },
        newPost:(text)=>{
            dispatch(newPostTextActionCreator(text));
        }
    }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost);

export default MyPostContainer;