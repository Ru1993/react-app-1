import React from "react";
import ava from './../../../img/ava.jpg'
import stile from './Profile.module.css'

const Post = (props) => {
    return (
        <div className={stile.post}>
            <img src={ava} className={stile.ava} />
            <div>
                {props.message}
            </div>
            <div>
                like:{props.like}
            </div>
        </div>
    )
}

export default Post;