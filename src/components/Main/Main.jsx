import React from "react";
import {NavLink, Route} from "react-router-dom";
import styles from "./Main.module.css"
import SignUpContainer from "./SignUp/SignUpContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import LoginContainer from "./Login/LoginContainer";
import RestorePassword from "./RestorePassword/RestorePassword";
import AppointmentContainer from "./Appointment/AppointmentContainer";

const Main = (props) => {

    return (
        <div className={styles.appWrapperContent}>
            <Route path="/signup" render={ () => <SignUpContainer/>}/>
            <Route path="/login" render={ () => <LoginContainer/>}/>
            <Route path="/profile" render={ () => <ProfileContainer/>}/>
            <Route path="/appointment" render={ () => <AppointmentContainer/>}/>
            <Route path="/restore-password" render={ () => <RestorePassword/>}/>
        </div>
    );
};

export default Main;