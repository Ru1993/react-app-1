import React from "react";
import stile from './User.module.css'
import user from '../../../img/user.png'
import { NavLink } from "react-router-dom";

const User = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return (<span
                            className={props.currentPage === p && stile.button}
                            onClick={(event) => { props.onSetCurrentPage(p) }} >{p}</span>)
                    })
                }
            </div>
            {
                props.users.map(u => <div kye={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : user} className={stile.img} />
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }}>Follow</button>
                                    : <button onClick={() => { props.follow(u.id) }}>UnFollow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        {/* <div>{'u.location.country'}</div>
                            <div>{'u.location.town'}</div> */}
                    </span>
                </div>
                )
            }
        </div>
    )
}

export default User;