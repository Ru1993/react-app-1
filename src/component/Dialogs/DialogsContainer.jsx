import { connect } from 'react-redux';
import { addMessageActionCreator, newMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


// const DialogsContainer = (props) => {

//     let state = props.store.getState().DialogsContent;

//     let OnAddMessage = () => {
//         props.store.dispatch(addMessageActionCreator());
//     }

//     let OnNewMessage = (text) => {
//         props.store.dispatch(newMessageTextActionCreator(text));
//     }

//     return (
//         <Dialogs addMessage={OnAddMessage} newMessage={OnNewMessage} 
//         DialogsContent={state} />
//     );
// }

const mapStateToProps = (state) => {
    return {
        DialogsContent: state.DialogsContent,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        newMessage: (text) => {
            dispatch(newMessageTextActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;