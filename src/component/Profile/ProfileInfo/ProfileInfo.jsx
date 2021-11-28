import React from "react";
import stile from '../Profile.module.css'
import cars from './../../../img/cars.jpg'
import Preloader from './../../Common/Preloader/Preloader';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return (<Preloader />)
    }

    return (
        <div className={stile.ststus}>
            {/* <div>
                <img src={cars} className={stile.img} />
            </div> */}
            <div>
                <img src={props.profile.photos.large} />
            </div>
            <div>
                <ProfileStatus status={'yo yo'} />
            </div>
        </div>
    )
}

export default ProfileInfo;