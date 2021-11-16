import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from '../../redux/usersReducer';
import User from './User/User';
import axios from "axios";

class UserContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    onSetCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {

        return (
            <User totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                currentPage={this.props.currentPage} onSetCurrentPage={this.onSetCurrentPage}
                users={this.props.users} unfollow={this.props.unfollow} follow={this.props.follow}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.UsersContent.users,
        pageSize: state.UsersContent.pageSize,
        totalUsersCount: state.UsersContent.totalUsersCount,
        currentPage: state.UsersContent.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);;