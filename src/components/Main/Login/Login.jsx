import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {Redirect} from "react-router-dom";

const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    const onSubmit = (formData) => {
        let {emailOrPhone, password} = formData;
        props.login(emailOrPhone, password);
    };

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
                <Field placeholder={"Email или телефон"} name={"emailOrPhone"} component={Input}/>
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