import React, { useEffect, useState } from "react"

const ProfileStatusHooks = (props) =>{

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect (()=>{
        setStatus(props.status);
    },[props.status]);

    let activeEditMode = () =>{
        setEditMode(true);
    }

    let deactivateEditMode = () =>{
        setEditMode(false);
        props.setUpdateStatus(status);
    }

    let onStatusChange = (e) =>{
        setStatus(e.currentTarget.value);
    }

    return(
        <div>
            <b>Status</b> :
            { !editMode &&
            <span onDoubleClick={activeEditMode} >{props.status || '-----'}</span>
            }
            { editMode &&
                <input onBlur={deactivateEditMode} autoFocus={true} value={status} 
                onChange={onStatusChange}/>
            }
        </div>
    )
}

export default ProfileStatusHooks;