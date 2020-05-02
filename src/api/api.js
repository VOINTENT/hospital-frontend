import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: '185.27.194.131:5000/api/v1',
});

export const authAPI = {
    signUp(last_name, first_name, middle_name, email, phone_number, password) {
        return instance.post(`/entities/patients/auth/signup`, {last_name, first_name, middle_name, email, phone_number, password})
            .then(response => response.data)
    },

    login(email_or_phone, password) {
        return instance.post(`/entities/patients/auth/login/basic`, {email_or_phone, password})
            .then(response => response.data);
    },

    detail() {
        return instance.get(`/entities/patients`)
            .then(response => response.data)
    }

};