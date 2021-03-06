import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, requestUsers } from '../../redux/usersReducer';
import Users from './User/Users';
import Preloader from '../Common/Preloader/Preloader';
import {
    getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgres
} from './../../redux/usersSelectors';


class UserContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onSetCurrentPage = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return (
            <div>
                {this.props.isFetching ? <Preloader /> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage} onSetCurrentPage={this.onSetCurrentPage}
                    users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}
                    followingInProgres={this.props.followingInProgres}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgres: getFollowingInProgres(state)
    }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, requestUsers })(UserContainer);



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

// const mapStateToProps = (state) => {
//     return {
//         users: state.UsersContent.users,
//         pageSize: state.UsersContent.pageSize,
//         totalUsersCount: state.UsersContent.totalUsersCount,
//         currentPage: state.UsersContent.currentPage,
//         isFetching: state.UsersContent.isFetching,
//         followingInProgres: state.UsersContent.followingInProgres
//     }
// }