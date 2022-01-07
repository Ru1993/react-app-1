import React from "react";
import stile from './MyPost.module.css'
import Post from '../Post/Post';
import { Field, reduxForm } from "redux-form";
import { maxLenghtCreator, required } from "../../validators/validators";
import { Element } from './../../Common/FormsControls/FormsControls';

let Textarea = Element('textarea');
let maxLength10 = maxLenghtCreator(10);

const FormMyPost = (props) =>{
    return(
        <form onSubmit={props.handleSubmit} key={props.kye}>
            <div>
                <Field component={Textarea} name={'newPostText'} placeholder={'post'} 
                 validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Post</button>
            </div>
        </form>
    ) 
}

const FormReduxMyPost = reduxForm({form:'newPost'})(FormMyPost);

const MyPost = (props) => {
    let postElement = props.ProfileContent.post.map((p) => <Post key={p.id} message={p.message} like={p.like} />)

    let newPost = (value) =>{
        props.newProfile(value.newPostText);
    }

    return (
        <div className={stile.profile}>
            <div>
                <FormReduxMyPost onSubmit={newPost} />
            </div>
            <div>
                {postElement}
            </div>
        </div>
    );
}

export default MyPost;