import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: ' http://185.27.194.131:5000/api/v1/'
});

export const authAPI = {
    signUp(last_name, first_name, middle_name, email, phone_number, password) {
        return instance.post(`entities/patients/auth/signup`, {last_name, first_name, middle_name, email, phone_number, password})
            .then(response => response.data)
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            })
    },

    login(email_or_phone, password) {
        let bodyFormData = new FormData();
        bodyFormData.set('email_or_phone', email_or_phone);
        bodyFormData.set('password', password);

        return instance.post(`entities/patients/auth/login/basic`, bodyFormData)
            .then(response => response.data)
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            })
    },

    logout() {
        return instance.delete(`/entities/patients/auth/logout`)
            .then(response => response.data)
            .catch(function (error) {
                if (error.response) {
                    return error.response.data
                }
            })
    },

    detail() {
        return instance.get(`entities/patients`)
            .then(response => response.data)
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            })
    }

};