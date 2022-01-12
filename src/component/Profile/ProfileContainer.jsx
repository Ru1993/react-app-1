import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile';
import { profileUser, getStatusProfile, setUpdateStatus, savePhoto, saveFormData } from './../../redux/profileReducer';
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContent extends React.Component {

    refreshProfile(){
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizesUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.profileUser(userId);
        this.props.getStatusProfile(userId);
    }

    componentDidMount(){
        this.refreshProfile();
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile();
        }
    }
    
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} isOwner={!this.props.match.params.userId} 
                    setUpdateStatus={this.props.setUpdateStatus} status={this.props.status} savePhoto={this.props.savePhoto}
                    saveFormData={this.props.saveFormData}
                    />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.ProfileContent.profile,
        status: state.ProfileContent.status,
        isAuth: state.auth.isAuth,
        authorizesUserId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, { profileUser, getStatusProfile, setUpdateStatus, savePhoto, saveFormData}),
    withRouter,
    withAuthRedirect
)(ProfileContent);
