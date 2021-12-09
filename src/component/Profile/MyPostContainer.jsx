import { newProfile} from "../../redux/profileReducer";
import MyPost from './MyPost/MyPost';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        ProfileContent: state.ProfileContent,
    }
}

const MyPostContainer = connect(mapStateToProps, { newProfile })(MyPost);

export default MyPostContainer;

// const mapDispatchToProps = (dispatch)=>{
//     return {
//         newProfile:()=>{
//             dispatch(addPostActionCreator());
//         },
//         newPost:(text)=>{
//             dispatch(newPostTextActionCreator(text));
//         }
//     }
// }