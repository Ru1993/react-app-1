import React from "react";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import stile from './Dialogs.module.css'
import { addMessageActionCreator, newMessageTextActionCreator } from '../../redux/dialogsReducer';


const Dialogs = (props) => {

    let dialogElement = props.DialogsContent.dialog.map((d) => <Dialog id={d.id} name={d.name} />);
    let messaegeElement = props.DialogsContent.message.map((m) => <Message id={m.id} message={m.message} />);

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let newMessage = (event) => {
        let text = event.target.value;
        props.dispatch(newMessageTextActionCreator(text));
    }

    return (
        <div className={stile.dialogs} >
            <div>
                {dialogElement}
            </div>
            <div>
                <div>
                    {messaegeElement}
                </div>
                <div>
                    <textarea onChange={newMessage} 
                        value={props.newText} />
                </div>
                <div>
                    <button onClick={addMessage} >clik</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;