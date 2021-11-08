import React from "react";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import stile from './Dialogs.module.css'


const Dialogs = (props) => {

    let dialogElement = props.DialogsContent.dialog.map((d) => <Dialog id={d.id} name={d.name} />);
    let messaegeElement = props.DialogsContent.message.map((m) => <Message id={m.id} message={m.message} />);

    let OnAddMessage = () => {
        props.addMessage();
    }

    let OnNewMessage = (event) => {
        let text = event.target.value;
        props.newMessage(text);
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
                    <textarea onChange={OnNewMessage} 
                        value={props.newText} placeholder='Enter message' />
                </div>
                <div>
                    <button onClick={OnAddMessage} >clik</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;