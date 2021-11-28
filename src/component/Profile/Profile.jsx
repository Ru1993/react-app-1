import React from "react";
import MyPostContainer from "./MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo profile={props.profile} />
            </div>
            <div>
                <MyPostContainer />
            </div>
        </div>
    )
}

export default Profile;