import React from "react";
import {Redirect} from "react-router-dom";

const SignUp = (props) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h3>Регистрация</h3>
            <SignUpForm/>
        </div>
    );
};

const SignUpForm = (props) => {
    return (
        <div>
            Форма регистрации
        </div>

    );
};

export default SignUp;