import React from "react";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import stile from './Dialogs.module.css'
import { Field, reduxForm } from "redux-form";
import { maxLenghtCreator, required } from "../validators/validators";
import { Element } from "../Common/FormsControls/FormsControls";

const Dialogs = (props) => {

    let dialogElement = props.DialogsContent.dialog.map((d) => <Dialog id={d.id} name={d.name} />);
    let messaegeElement = props.DialogsContent.message.map((m) => <Message id={m.id} message={m.message} />);

    let addNewMessage = (value) => {
        props.addMessage(value.newMessage);
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
                <DialogReduxForm onSubmit={addNewMessage} />
            </div>

        </div>
    );
}

let Textarea = Element ('textarea');
let maxLength20 = maxLenghtCreator (20);

const FormDialog = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter message'} component={Textarea}
                     name={'newMessage'} validate={[required, maxLength20]}/>
            </div>
            <div>
                <button>clik</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm({ form: 'addNewMessage' })(FormDialog);

export default Dialogs;