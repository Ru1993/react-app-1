import React from "react";
import stile from './Profile.module.css'
import cars from './../../img/cars.jpg'
import Post from './Post/Post';

const Profile = (props) => {

    let postElement = props.ProfileContent.post.map((p) => <Post id={p.id} message={p.message} like={p.like} />)

    let element = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let newPost = () => {
        let text = element.current.value
        props.newPostText(text);
    }

    return (
        <div className={stile.profile}>
            <div>
                <img src={cars} className={stile.img} />
            </div>
            <div>
                <textarea onChange={newPost} ref={element}
                    value={props.newText}/>
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