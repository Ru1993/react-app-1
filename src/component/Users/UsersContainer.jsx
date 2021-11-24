import React from 'react';
import { connect } from 'react-redux';
import {follow, unfollow, setUsers, setCurrentPage,getUsers} from '../../redux/usersReducer';
import User from './User/User';
import Preloader from '../Common/Preloader/Preloader';


class UserContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onSetCurrentPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <User totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage} onSetCurrentPage={this.onSetCurrentPage}
                    users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}
                    followingInProgres={this.props.followingInProgres} 
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.UsersContent.users,
        pageSize: state.UsersContent.pageSize,
        totalUsersCount: state.UsersContent.totalUsersCount,
        currentPage: state.UsersContent.currentPage,
        isFetching: state.UsersContent.isFetching,
        followingInProgres: state.UsersContent.followingInProgres
    }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, getUsers })(UserContainer);



    // const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount));
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     }
// }