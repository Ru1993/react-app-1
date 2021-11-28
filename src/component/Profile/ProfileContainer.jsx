import React from "react";
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from './Profile';
import { profileUser } from './../../redux/profileReducer';
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContent extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.profileUser(userId);
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

export default compose(
    connect(mapStateToProps, { profileUser }),
    withRouter,
    withAuthRedirect
)(ProfileContent);
