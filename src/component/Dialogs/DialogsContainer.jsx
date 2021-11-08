import { addMessageActionCreator, newMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    let state = props.store.getState().DialogsContent;

    let OnAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let OnNewMessage = (text) => {
        props.store.dispatch(newMessageTextActionCreator(text));
    }

    return (
        <Dialogs addMessage={OnAddMessage} newMessage={OnNewMessage} 
        DialogsContent={state} />
    );
}

export default DialogsContainer;