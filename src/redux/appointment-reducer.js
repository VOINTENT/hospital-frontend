const UPDATE_CURRENT_DOCTOR = 'update-current-doctor';
const UPDATE_CURRENT_SPECIALTY = 'update-current-specialty';
const UPDATE_CURRENT_SERVICE = 'update-current-service';
const UPDATE_CURRENT_START_DATE = 'update-current-start-date';
const UPDATE_CURRENT_FINISH_DATE = 'update-current-finish-date';
const UPDATE_CURRENT_START_TIME = 'update-current-start-time';
const UPDATE_CURRENT_FINISH_TIME = 'update-current-finish-time';


let initialState = {

    specialties: [
        {
            id: 0,
            name: 'Не выбрано'
        },
        {
            id: 1,
            name: 'Специальность1'
        },
        {
            id: 2,
            name: 'Специальность2'
        },
        {
            id: 3,
            name: 'Специальность3'
        },
    ],
    currentSpecialtyId: '0',

    services: [
        {
            id: 0,
            name: 'Не выбрано'
        },
        {
            id: 1,
            name: 'Услуга1'
        },
        {
            id: 2,
            name: 'Услуга2'
        },
        {
            id: 3,
            name: 'Услуга3'
        },
    ],
    currentServiceId: '0',

    doctors: [
        {
            id: 0,
            name: 'Не выбрано'
        },
        {
            id: 1,
            name: 'Врач1'
        },
        {
            id: 2,
            name: 'Врач2'
        },
        {
            id: 3,
            name: 'Врач3'
        },
    ],
    currentDoctorId: '0',

    currentStartDate: null,
    currentFinishDate: null,

    currentStartTime: null,
    currentFinishTime: null,

    current_filter: '',

    registers: [
        {
            specialty: {
                id: 1,
                name: 'Наркология'
            },

            doctor: {
                id: 1,
                name: 'Врач1'
            },
            service: {
                id: 1,
                name: 'Получить пизды'
            },
            date: '25-02-12',
            time: '12:00'
        },
        {
            specialty: {
                id: 1,
                name: 'Наркология'
            },

            doctor: {
                id: 1,
                name: 'Врач1'
            },
            service: {
                id: 1,
                name: 'Получить пизды'
            },
            date: '25-02-12',
            time: '13:00'
        }
    ]
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

export default appointmentReducer;