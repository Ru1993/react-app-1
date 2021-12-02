import React from "react";
import MyPostContainer from "./MyPostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo profile={props.profile} 
                setUpdateStatus={props.setUpdateStatus} status={props.status}/>
            </div>
            <div>
                <MyPostContainer />
            </div>
        </div>
    )
}

export default Profile;