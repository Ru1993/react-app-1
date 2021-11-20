import React from "react";
import stile from '../Profile.module.css'
import cars from './../../../img/cars.jpg'
import Preloader from './../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return (<Preloader />)
    }

    return (
        <div>
            <div>
                <img src={cars} className={stile.img} />
            </div>
            <div>
                <img src={props.profile.photos.large} />
            </div>
            <div>
                <div></div>
            </div>
        </div>
    )
}

export default ProfileInfo;