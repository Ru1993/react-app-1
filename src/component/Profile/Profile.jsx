import React from "react";
import MyPostContainer from "./MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo profile={props.profile} savePhoto={props.savePhoto} isOwner={props.isOwner}
                setUpdateStatus={props.setUpdateStatus} status={props.status} saveFormData={props.saveFormData} />
            </div>
            <div>
                <MyPostContainer />
            </div>
        </div>
    )
}

export default Profile;