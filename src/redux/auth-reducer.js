import {authAPI} from "../api/api";
import {sha512} from "js-sha512";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    patientId: null,
    firstName: null,
    lastName: null,
    middleName: null,
    birthDate: null,
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
        default:
            return state

    }
};

const setUserData = (userId, patientId, firstName, lastName, middleName, birthDate, snils, policy, email, phoneNumber, isAuth) => ({type: SET_USER_DATA, payload: {userId, patientId, firstName, lastName, middleName, birthDate, snils, policy, email, phoneNumber, isAuth}});

export const getUserData = () => {
    return (dispatch) => {
        authAPI.detail()
            .then(data => {
                if (data.resultCode === 0) {
                    let {userId, patientId, firstName, lastName, middleName, birthDate, snils, policy, email, phoneNumber} = data.data;
                    dispatch(setUserData(userId, patientId, firstName, lastName, middleName, birthDate, snils, policy, email, phoneNumber, true));
                }
            });
    }
};

export const signup = (userId, patientId, firstName, lastName, middleName, birthDate, snils, policy, email, phoneNumber) => (dispatch) => {
    authAPI.signUp(userId, patientId, firstName, lastName, middleName, birthDate, snils, policy, email, phoneNumber)
        .then(data => {
            if (data.status === 0) {
                dispatch(setUserData(userId, patientId, firstName, lastName, middleName, birthDate, snils, policy, email, phoneNumber, true));
            }
        })
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
                    data.data.birth_date,
                    data.data.snils,
                    data.data.policy,
                    data.data.email,
                    data.data.phone_number,
                    true
                ));
            }
        })
};

export const logout = () => (dispatch) => {
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
    ))

};

export default authReducer;