import {authAPI} from "../api/api";
import React from "react";

const UPDATE_CURRENT_DOCTOR = 'update-current-doctor';
const UPDATE_CURRENT_SPECIALTY = 'update-current-specialty';
const UPDATE_CURRENT_SERVICE = 'update-current-service';
const UPDATE_CURRENT_START_DATE = 'update-current-start-date';
const UPDATE_CURRENT_FINISH_DATE = 'update-current-finish-date';
const UPDATE_CURRENT_START_TIME = 'update-current-start-time';
const UPDATE_CURRENT_FINISH_TIME = 'update-current-finish-time';

const SET_DOCTORS_DATA = 'SET-DOCTORS-DATA';
const SET_SPECIALTIES_DATA = 'SET-SPECIALTY-DATA';
const SET_SERVICES_DATA = 'SET-SERVICE-DATA';


let initialState = {

    specialties: [
        {
            id: 0,
            name: 'Не выбрано'
        }
    ],
    currentSpecialtyId: '0',

    services: [
        {
            id: 0,
            name: 'Не выбрано'
        }
    ],
    currentServiceId: '0',

    doctors: [
        {
            id: 0,
            name: 'Не выбрано'
        }
    ],
    currentDoctorId: '0',

    currentStartDate: null,
    currentFinishDate: null,

    currentStartTime: null,
    currentFinishTime: null,

    current_filter: '',

    registers: []
};



const appointmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CURRENT_DOCTOR:
            return {
                ...state,
                currentDoctorId: action.currentDoctorId
            };
        case UPDATE_CURRENT_SPECIALTY:
            return {
                ...state,
                currentSpecialtyId: action.currentSpecialtyId
            };
        case UPDATE_CURRENT_SERVICE:
            return {
                ...state,
                currentServiceId: action.currentServiceId
            };

        case SET_DOCTORS_DATA:
            return {
                ...state,
                doctors: state.doctors + action.doctors
            };
        case SET_SPECIALTIES_DATA:
            return {
                ...state,
                specialty: state.specialties + action.specialties
            };
        case SET_SERVICES_DATA:
            return {
                ...state,
                service: state.services + action.services
            };

        case UPDATE_CURRENT_START_DATE:
            return {
                ...state,
                currentStartDate: action.currentStartDate
            };
        case UPDATE_CURRENT_FINISH_DATE:
            return {
                ...state,
                currentFinishDate: action.currentFinishDate
            };
        case UPDATE_CURRENT_START_TIME:
            return {
                ...state,
                currentStartTime: action.currentStartTime
            };
        case UPDATE_CURRENT_FINISH_TIME:
            return {
                ...state,
                currentFinishTime: action.currentFinishTime
            };
        default:
            return state
    }
};

const updateCurrentSpecialtyDispatch = (currentSpecialtyId) => {
    return {type: UPDATE_CURRENT_SPECIALTY, currentSpecialtyId}
};

const updateCurrentDoctorDispatch = (currentDoctorId) => {
    return {type: UPDATE_CURRENT_DOCTOR, currentDoctorId}
};

const updateCurrentServiceDispatch = (currentServiceId) => {
    return {type: UPDATE_CURRENT_SERVICE, currentServiceId}
};

// start date
const updateCurrentStartDateDispatch = (currentStartDate) => {
    return {type: UPDATE_CURRENT_START_DATE, currentStartDate}
};

// finish date
const updateCurrentFinishDateDispatch = (currentFinishDate) => {
    return {type: UPDATE_CURRENT_FINISH_DATE, currentFinishDate}
};

// start time
const updateCurrentStartTimeDispatch = (currentStartTime) => {
    return {type: UPDATE_CURRENT_START_TIME, currentStartTime}
};

// finish time
const updateCurrentFinishTimeDispatch = (currentFinishTime) => {
    return {type: UPDATE_CURRENT_FINISH_TIME, currentFinishTime}
};

export const updateCurrentSpecialty = (currentSpecialtyId) => (dispatch) => {
    dispatch(updateCurrentSpecialtyDispatch(currentSpecialtyId))
};

export const updateCurrentDoctor = (currentDoctorId) => (dispatch) => {
    dispatch(updateCurrentDoctorDispatch(currentDoctorId))
};

export const updateCurrentService = (currentServiceId) => (dispatch) => {
    dispatch(updateCurrentServiceDispatch(currentServiceId))
};

// start date
export const updateCurrentStartDate = (currentStartDate) => (dispatch) => {
    dispatch(updateCurrentStartDateDispatch(currentStartDate))
};

// finish date
export const updateCurrentFinishDate = (currentFinishDate) => (dispatch) => {
    dispatch(updateCurrentFinishDateDispatch(currentFinishDate))
};

// start time
export const updateCurrentStartTime = (currentStartTime) => (dispatch) => {
    dispatch(updateCurrentStartTimeDispatch(currentStartTime))
};

// finish time
export const updateCurrentFinishTime = (currentFinishTime) => (dispatch) => {
    dispatch(updateCurrentFinishTimeDispatch(currentFinishTime))
};

const setDoctorsData = (doctors) => ({type: SET_DOCTORS_DATA, doctors: doctors});

export const getDoctorsData = () => {
    return (dispatch) => {
        authAPI.doctors()
            .then(data => {
                if (data.status === 0) {

                    let doctors = data.data.map(doctor => ({id: doctor.id, name: doctor.last_name + ' ' + doctor.first_name + ' ' + doctor.middle_name}));
                    dispatch(setDoctorsData(doctors));
                }
            });
    }
};

const setServicesData = (services) => ({type: SET_SERVICES_DATA, services: services});

export const getServicesData = () => {
    return (dispatch) => {
        authAPI.services()
            .then(data => {
                if (data.status === 0) {
                    let services = data.data.map(service => ({id: service.id, name: service.name}));
                    dispatch(setServicesData(services));
                }
            });
    }
};

const setSpecialtiesData = (specialties) => ({type: SET_SPECIALTIES_DATA, specialties: specialties});

export const getSpecialtiesData = () => {
    return (dispatch) => {
        authAPI.serviceCategories()
            .then(data => {
                if (data.status === 0) {
                    let specialties = data.data.map(specialty => ({id: specialty.id, name: specialty.name}));
                    dispatch(setSpecialtiesData(specialties));
                }
            });
    }
};



export default appointmentReducer;