import React from "react";
import Paginator from "../../validators/Paginator/Paginator";
import User from "./User";

const Users = (props) => {

    return (
        <div>
            <div>
                <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                    currentPage={props.currentPage} onSetCurrentPage={props.onSetCurrentPage}
                />
            </div>
            {
                props.users.map(u => <User user={u} key={u.id} followed={props.followed}
                    followingInProgres={props.followingInProgres} unfollow={props.unfollow}
                    follow={props.follow}
                />

                )
            }
        </div>
    )
}

export default Users;