import React from "react";
import stile from './Users.module.css'
import ava from '../../../img/user.png'
import { NavLink } from "react-router-dom";

const User = ({ user, ...props }) => {

    return (
        <div>
            {
                <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : ava} className={stile.img} />
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button disabled={props.followingInProgres.some(id => id === user.id)}
                                        onClick={() => { props.unfollow(user.id); }}>UnFollow</button>

                                    : <button disabled={props.followingInProgres.some(id => id === user.id)}
                                        onClick={() => { props.follow(user.id); }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        {/* <div>{'u.location.country'}</div>
                            <div>{'u.location.town'}</div> */}
                    </span>
                </div>
            }
        </div>
    )
}

export default User;