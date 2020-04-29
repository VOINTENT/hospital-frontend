import {authAPI} from "../api/api";

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

const signUpReducer = (state = initialState, action) => {
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

export const setUserData = (userId, patientId, firstName, lastName, middleName, birthDate, snils, policy, email, phoneNumber, isAuth) => ({type: SET_USER_DATA, payload: {userId, patientId, firstName, lastName, middleName, birthDate, snils, policy, email, phoneNumber, isAuth}});

export const getUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setUserData(id, login, email, true));
                }
            });
    }
};

export const signup = (userId, patientId, firstName, lastName, middleName, birthDate, snils, policy, email, phoneNumber) => (dispatch) => {
    authAPI.signUp(userId, patientId, firstName, lastName, middleName, birthDate, snils, policy, email, phoneNumber)
        .then(data => {
            if (data.status === 0) {
                dispatch(getUserData())
            }
        })
};

// export const login = (email, password, rememberMe) => (dispatch) => {
//     authAPI.login(email, password, rememberMe)
//         .then(data => {
//             if (data.resultCode === 0) {
//                 dispatch(getAuthUserData())
//             }
//         })
// };

export default signUpReducer;