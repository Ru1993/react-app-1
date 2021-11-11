import React from "react";
import ava from './User.module.css'

const User = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, usersPhoto: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
                followed: true, fullName: "Max", status: 'hi', location: { country: 'Ukraina', town: 'Zaphorija' }
            },
            {
                id: 2, usersPhoto: `https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80`,
                followed: false, fullName: "Maxim", status: 'hi ho', location: { country: 'Ukraina', town: 'Kiyev' }
            },
        ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div kye={u.id}>
                    <span>
                        <div>
                            <img src={u.usersPhoto} className={ava.img} />
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
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.town}</div>
                    </span>
                </div>
                )
            }
        </div>
    )
}

export default User;