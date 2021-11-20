import React from "react";
import { connect } from 'react-redux';
import axios from "axios";
import Header from "./Header";
import { setAuthUserData } from './../../redux/authReducer';


class HeaderContent extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { email, id, login } = response.data.data;
                    this.props.setAuthUserData(email, id, login);
                }
            })
    }
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContent);