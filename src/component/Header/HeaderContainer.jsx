import React from "react";
import { connect } from 'react-redux';
import Header from "./Header";
import { logout } from './../../redux/authReducer';


class HeaderContent extends React.Component {

    render() {
        return (<Header {...this.props} login={this.props.login} isAuth={this.props.isAuth}/>)
    }
}


const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, { logout })(HeaderContent);
