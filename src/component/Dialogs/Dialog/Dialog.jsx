import React from "react";
import ava from './../../../img/ava.jpg'
import stile from './Dialog.module.css'


const Dialog = (props) => {
    return (
        <div className={stile.item} >
            <div>
                <img src={ava} className={stile.ava} />
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default Dialog;