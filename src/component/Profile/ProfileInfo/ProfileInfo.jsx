import React, { useState } from "react";
import stile from '../Profile.module.css'
import ava from '../../../img/user.png'
import Preloader from './../../Common/Preloader/Preloader';
import ProfileStatusHooks from "./ProfileStatusHooks";
import ProfileDataReduxForm from "./ProfileDataForm/ProfileDataForm";
import ProfileData from './ProfileDataForm/ProfileData';

const ProfileInfo = ({ profile, error, ...props }) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return (<Preloader />)
    }

    let onSavePhotos = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        props.saveFormData(formData)
            .then(() => {
                setEditMode(false);
            })
    }

    return (
        <div className={stile.status}>
            <div>
                <img src={profile.photos.large || ava} className={stile.photo} />
                {props.isOwner && <input type={'file'} onChange={onSavePhotos} />}
            </div>{editMode
                ? <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                : <ProfileData isOwner={props.isOwner} goToEditMode={() => { setEditMode(true) }} profile={profile} />}
            <div>
                <ProfileStatusHooks status={props.status} setUpdateStatus={props.setUpdateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;







