import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile';
import { profileUser, getStatusProfile,setUpdateStatus } from './../../redux/profileReducer';
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContent extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 20239
        }
        this.props.profileUser(userId);
        this.props.getStatusProfile(userId);
    }
    
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                setUpdateStatus={this.props.setUpdateStatus} status={this.props.status} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.ProfileContent.profile,
        status: state.ProfileContent.status
    }
}

export default compose(
    connect(mapStateToProps, { profileUser,getStatusProfile,setUpdateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContent);
