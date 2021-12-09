import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessage} from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        DialogsContent: state.DialogsContent
    }
}

export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(Dialogs);