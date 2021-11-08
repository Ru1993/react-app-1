import React from "react";
import stile from './Profile.module.css'
import cars from './../../img/cars.jpg'
import Post from './Post/Post';

const Profile = (props) => {

    let postElement = props.post.map((p) => <Post id={p.id} message={p.message} like={p.like} />)

    let OnAddPost = () => {
        props.newProfile();
    }

    let OnNewPost = (event) => {
        let text = event.target.value;
        props.newPost(text);
    }

    return (
        <div className={stile.profile}>
            <div>
                <img src={cars} className={stile.img} />
            </div>
            <div>
                <textarea onChange={OnNewPost} 
                    value={props.newText} />
            </div>
            <div>
                <button onClick={OnAddPost}>Post</button>
            </div>
            <div>
                {postElement}
            </div>
        </div>
    );
}

export default Profile;