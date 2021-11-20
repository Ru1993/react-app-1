import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile';
import axios from "axios";
import { setUsersProfile } from './../../redux/profileReducer';


class ProfileContent extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUsersProfile(response.data);
            })
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.ProfileContent.profile
    }
}

let withRouterContainer = withRouter(ProfileContent)

export default connect(mapStateToProps, { setUsersProfile })(withRouterContainer);
