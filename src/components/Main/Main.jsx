import React from "react";
import {Route} from "react-router-dom";
import styles from "./Main.module.css"
import SignUpContainer from "./SignUp/SignUpContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import LoginContainer from "./Login/LoginContainer";

const Main = (props) => {

    return (
        <div className={styles.appWrapperContent}>
            <Route path="/signup" render={ () => <SignUpContainer/>}/>
            <Route path="/login" render={ () => <LoginContainer/>}/>
            <Route path="/profile" render={ () => <ProfileContainer/>}/>
        </div>
    );
};

export default Main;