import {authAPI} from "../api/api";
import {sha512} from "js-sha512";

const SET_USER_DATA = 'SET-USER-DATA';
const UPDATE_USER_DATA = 'UPDATE-USER-DATA';

let initialState = {
    userId: null,
    patientId: null,
    firstName: null,
    lastName: null,
    middleName: null,
    birthDate: null,
    gender: null,
    snils: null,
    policy: null,
    email: null,
    phoneNumber: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        case UPDATE_USER_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state

    }
};

const setUserData = (userId, patientId, firstName, lastName, middleName, gender, birthDate, snils, policy, email, phoneNumber, isAuth) => ({type: SET_USER_DATA, payload: {userId, patientId, firstName, lastName, middleName, gender, birthDate, snils, policy, email, phoneNumber, isAuth}});

const updateUserDataDispatch = (firstName, lastName, middleName, gender, snils, policy, birthDate) => ({type: UPDATE_USER_DATA, payload: {firstName, lastName, middleName, gender, snils, policy, birthDate}});

export const getUserData = () => {
    return (dispatch) => {
        authAPI.detail()
            .then(data => {
                if (data.status === 0) {
                    let {user_id, patient_id, first_name, last_name, middle_name, gender, birth_date, snils, policy, email, phone_number} = data.data;
                    dispatch(setUserData(user_id, patient_id, first_name, last_name, middle_name, gender, birth_date, snils, policy, email, phone_number, true));
                }
            });
    }
};

export const updateUserData = (firstName, lastName, middleName, gender, snils, policy, birthDate) => (dispatch) => {
    authAPI.update(firstName, lastName, middleName, gender, snils, policy, birthDate)
        .then(data => {
            if (data.status === 0) {
                dispatch(updateUserDataDispatch(firstName, lastName, middleName, gender, snils, policy, birthDate));
            }
        })
};

export const signup = (firstName, lastName, middleName, email, phoneNumber, password) => (dispatch) => {
    authAPI.signUp(firstName, lastName, middleName, email, phoneNumber, sha512(password))
        .then(data => {
            if (data.status === 0) {
                dispatch(setUserData(
                    data.data.user_id,
                    data.data.patient_id,
                    data.data.first_name,
                    data.data.last_name,
                    data.data.middle_name,
                    data.data.gender,
                    data.data.birth_date,
                    data.data.snils,
                    data.data.policy,
                    data.data.email,
                    data.data.phone_number,
                    true));
            }
        });
};

export const login = (email_or_phone, password) => (dispatch) => {
    authAPI.login(email_or_phone, sha512(password))
        .then(data => {
            if (data.status === 0) {
                dispatch(setUserData(
                    data.data.user_id,
                    data.data.patient_id,
                    data.data.first_name,
                    data.data.last_name,
                    data.data.middle_name,
                    data.data.gender,
                    data.data.birth_date,
                    data.data.snils,
                    data.data.policy,
                    data.data.email,
                    data.data.phone_number,
                    true
                ));
            }
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(data => {
            if (data.status === 0) {
                dispatch(setUserData(
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    false
                ));
            }
        });
};

export const restorePassword = (email) => (dispatch) => {
    authAPI.restorePassword(email)
        .then(data => {
            if (data.status === 0) {
            //    TODO
            }
        })
};




export default authReducer;