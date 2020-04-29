import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: '185.27.194.131:5000/api/v1',
});

export const authAPI = {
    signUp(last_name, first_name, middle_name, email, phone_number, password) {
        return instance.post(`/entities/patients/auth/signup`)
            .then(response => response.data)
    }


    // me() {
    //     return instance.get(`auth/me`)
    //         .then(response => response.data)
    // },
    // login(email, password, rememberMe = false) {
    //     return instance.post(`auth/login`, {email, password, rememberMe})
    //         .then(response => response.data);
    // },
    // logout() {
    //     return instance.delete(`auth/login`)
    //         .then(response => response.data)
    // }
};