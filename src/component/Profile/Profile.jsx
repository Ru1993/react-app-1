import React from "react";
import stile from './Profile.module.css'
import cars from './../../img/cars.jpg'
import Post from './Post/Post';
import { addPostActionCreator, newPostTextActionCreator } from "../../redux/profileReducer";

const Profile = (props) => {

    let postElement = props.ProfileContent.post.map((p) => <Post id={p.id} message={p.message} like={p.like} />)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let newPost = (event) => {
        let text = event.target.value;
        props.dispatch(newPostTextActionCreator(text));
    }

    return (
        <div className={stile.profile}>
            <div>
                <img src={cars} className={stile.img} />
            </div>
            <div>
                <textarea onChange={newPost} 
                    value={props.newText} />
            </div>
            <div>
                <button onClick={addPost}>Post</button>
            </div>
            <div>
                {postElement}
            </div>
        </div>
    );
}

export default Profile;