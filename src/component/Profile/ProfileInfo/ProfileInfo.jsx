import React, { useState } from "react";
import stile from '../Profile.module.css'
import ava from '../../../img/user.png'
import Preloader from './../../Common/Preloader/Preloader';
import ProfileStatusHooks from "./ProfileStatusHooks";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import ProfileData from "./ProfileDataForm/ProfileData";

const ProfileInfo = ({ error, ...props }) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return (<Preloader />)
    }

    let onSavePhotos = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (FormData) => {
        props.saveFormData(FormData)
            .then(() => {
                setEditMode(false);
            })
    }

    return (
        <div className={stile.ststus}>
            <div>
                <img src={props.profile.photos.large || ava} className={stile.photo} />
                {props.isOwner && <input type={'file'} onChange={onSavePhotos} />}
            </div>
            {editMode ?
                <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
                : <ProfileData profile={props.profile} goToEditMode={() => { setEditMode(true) }} isOwner={props.isOwner} />}
            <div>
                <ProfileStatusHooks status={props.status} setUpdateStatus={props.setUpdateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;