import { createSelector } from "reselect";

const getUsersSelector = (state) => {
    return state.UsersContent.users;
}

export const getPageSize = (state) => {
    return state.UsersContent.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.UsersContent.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.UsersContent.currentPage;
}

export const getIsFetching = (state) => {
    return state.UsersContent.isFetching;
}

export const getFollowingInProgres = (state) => {
    return state.UsersContent.followingInProgres;
}
    
export const getUsers = createSelector(getUsersSelector,(users)=>{
    return users;
})