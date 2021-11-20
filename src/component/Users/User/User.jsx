import React from "react";
import stile from './User.module.css'
import user from '../../../img/user.png'
import { NavLink } from "react-router-dom";
import axios from "axios";

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
                                    ? <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'c15592f5-f578-4108-93f0-61a5eb13fda3'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.unfollow(u.id)
                                                }
                                            })

                                    }}>UnFollow</button>

                                    : <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'c15592f5-f578-4108-93f0-61a5eb13fda3'
                                            }
                                        })
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.follow(u.id)
                                                }
                                            })

                                    }}>Follow</button>
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