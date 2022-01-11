import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9a68e28b-be00-4f7d-9345-2f3ea3bc74c2'
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
        return instance.delete(`follow/${id}`);
    },
    follow(id) {
        return instance.post(`follow/${id}`);
    },
    profile(userId) {
        return profileAPI.profile(userId);
    }
}

export const profileAPI = {
    profile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    setStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },
    savePhoto(photoFiles) {
        let formData = new FormData();
        formData.append('image', photoFiles)
        return instance.put(`profile/photo`, formData);
    },
    saveFormData(profile){
        return instance.put(`profile`, profile);
    }
}

export const auth = {
    authMe() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha) {
        return instance.post(`auth/login`, { email, password, rememberMe, captcha });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

export const securityAPI = {
    getSecurityURL(){
        return instance.get(`security/get-captcha-url`);
    }
}