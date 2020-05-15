import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import {reducer as formReducer} from "redux-form";
import appointmentReducer from "./appointment-reducer";

let reducers = combineReducers({
    auth: authReducer,
    appointment: appointmentReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;