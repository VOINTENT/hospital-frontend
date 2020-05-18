import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: ' http://185.27.194.131:5000/api/v1/'
});

export const authAPI = {

    signUp(last_name, first_name, middle_name, email, phone_number, password) {
        let bodyFormData = new FormData();
        bodyFormData.set('last_name', last_name);
        bodyFormData.set('first_name', first_name);
        bodyFormData.set('middle_name', middle_name);
        bodyFormData.set('email', email);
        bodyFormData.set('phone_number', phone_number);
        bodyFormData.set('password', password);
        return instance.post(`entities/patients/auth/signup`, bodyFormData)
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
    },

    update(last_name, first_name, middle_name, gender, snils, policy, birth_date) {
        let bodyFormData = new FormData();
        bodyFormData.set('last_name', last_name);
        bodyFormData.set('first_name', first_name);
        bodyFormData.set('middle_name', middle_name);
        bodyFormData.set('birth_date', birth_date);
        bodyFormData.set('policy', policy);
        bodyFormData.set('snils', snils);
        bodyFormData.set('gender', gender);
        return instance.patch(`/entities/patients`, bodyFormData)
            .then(response => response.data)
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            })
    },

    doctors() {
        return instance.get(`/entities/doctors`)
            .then(response => response.data)
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            })
    },

    serviceCategories() {
        return instance.get(`/entities/service_categories`)
            .then(response => response.data)
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            })
    },

    services() {
        return instance.get(`/entities/services`)
            .then(response => response.data)
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            })
    },

    registers(currentFilter) {
        return instance.get(`/entities/reception-lines` + currentFilter)
            .then(response => response.data)
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            })
    },

    myRegisters() {
        return instance.get(`/entities/registers`)
            .then(response => response.data)
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            })
    },

    addRegister(registerId) {
        let bodyFormData = new FormData();
        bodyFormData.set('reception_line_id', registerId);
        return instance.post(`/entities/registers`, bodyFormData)
            .then(response => response.data)
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            })
    },

    removeRegister(registerId) {
        return instance.delete(`/entities/registers/` + registerId)
            .then(response => response.data)
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            })
    },

    restorePassword(email) {
        let bodyFormData = new FormData();
        bodyFormData.set('email', email);

        return instance.post(`entities/patients/auth/restore-password`)
            .then(response => response.data)
            .catch(function (error) {
                return error.response.data;
            })
    }

};
