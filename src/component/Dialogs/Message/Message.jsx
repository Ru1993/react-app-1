import React from "react";
import stile from './Message.module.css'


const Message = (props) => {
    return (
        <div className={stile.item}>
            <div>
                {props.message}
            </div>
        </div>
    )
}

export default Message;