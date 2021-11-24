import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c15592f5-f578-4108-93f0-61a5eb13fda3'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)

    },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    prifile(userId){
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            })
    }
}

export const auth = {
    authMe() {
        return instance.get(`auth/me`)
    }
}