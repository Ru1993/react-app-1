import React from "react"
import stile from './../../Profile.module.css'
import { Field, reduxForm } from "redux-form";
import { Element } from "../../../Common/FormsControls/FormsControls";
import { required } from "../../../validators/validators";
import stiles from './../../../Common/FormsControls/FormsControls.module.css'

let Input = Element('input');

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>Edit</button></div>
            {error && <div className={stiles.fromSummeryError} >
                {error}
            </div>}
            <div>
                <b>fullName :</b> <Field placeholder={'Full Name'} name={'fullName'} component={Input}
                    validate={[required]} />
            </div>
            <div>
                <b>lookingForAJob :</b> <Field name={'lookingForAJob'} component={Input} type={'checkbox'} />
            </div>
            <div>
                <b>Contacts :</b>{Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={stile.contacts}>
                        <b>{key} : <Field key={key} name={`contacts.${key}`} component={Input} /></b>
                    </div>
                })}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm);

export default ProfileDataReduxForm;