import React from "react";
import {Route} from "react-router-dom";
import styles from "./Main.module.css"
import SignUpContainer from "./SignUp/SignUpContainer";
import Login from "./Login/Login";

const Main = (props) => {
    return (
        <div className={styles.appWrapperContent}>
            {/*<Route path="" render={ () => <div><h3>Типа главная страница</h3></div>}/>*/}
            <Route path="/signup" render={ () => <SignUpContainer/>}/>
            <Route path="/login" render={ () => <Login/>}/>
        </div>
    );
};

export default Main;