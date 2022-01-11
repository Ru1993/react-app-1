import React from "react";
import stile from './../../Profile.module.css'

const ProfileData = ({profile, goToEditMode, isOwner}) => {
    return (
        <div>{ isOwner &&
            <div><button onClick={goToEditMode} >Edit</button></div>}
            <div>
                <b>fullName :</b> {profile.fullName}
            </div>
            <div>
                <b>lookingForAJob :</b> {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
                <b>Contacts :</b>{Object.keys(profile.contacts).map(key => {
                    return <Content key={key} contactsTitle={key} contactsValue={profile.contacts[key]} />
                })}
            </div>
        </div>
    )
}

const Content = ({ contactsTitle, contactsValue }) => {
    return <div className={stile.contacts}><b>{contactsTitle} :</b>{contactsValue}<b></b></div>
}

export default ProfileData;


