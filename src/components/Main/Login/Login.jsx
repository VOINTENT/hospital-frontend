import React from "react";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../../redux/auth-reducer";
import {Input} from "../../common/FormsControls/FormsControls";

const Login = (props) => {
    return (
        <div>
            <div>
                <input type="text" placeholder={"Email или пароль"}/>
            </div>

            <div>
                <input type="password" placeholder={"Пароль"}/>
            </div>

            <div>
                <button>Войти</button>
            </div>
        </div>
    );
};

export default Login;