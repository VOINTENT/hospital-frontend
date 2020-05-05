import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    const onSubmit = (formData) => {
        let {email_or_phone, password} = formData;
        props.login(email_or_phone, password);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Вход</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email или телефон"} name={"email_or_phone"} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Пароль"} name={"password"} component={Input} type={"password"}/>
            </div>
            <div>
                <button>Вход</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;