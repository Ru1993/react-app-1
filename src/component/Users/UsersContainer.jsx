import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching } from '../../redux/usersReducer';
import User from './User/User';
import axios from "axios";
import Preloader from '../Common/Preloader/Preloader';


class UserContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onSetCurrentPage = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <User totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage} onSetCurrentPage={this.onSetCurrentPage}
                    users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}
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
        isFetching: state.UsersContent.isFetching
    }
}

export default connect(mapStateToProps,
    { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching })(UserContainer);


    
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