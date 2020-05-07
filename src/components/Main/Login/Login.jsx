import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {Redirect} from "react-router-dom";
import styles from './Login.module.css'

const Login = (props) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    const onSubmit = (formData) => {
        let {emailOrPhone, password} = formData;
        props.login(emailOrPhone, password);
    };

    return (
        <div className={styles.div}>
            <h1 className={styles.h1}>Вход</h1>
            <p className={styles.p}> Пожалуйста, заполните эти поля,что бы войти в систему.</p>
             
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.div}>
                <Field placeholder={"Email или телефон"} name={"emailOrPhone"} component={Input} className={styles.input} />
            </div>
            <div className={styles.div}>
                <Field placeholder={"Пароль"} name={"password"} component={Input} type={"password"} className={styles.input}/>
            </div>
            <div className={styles.div}>
                <button className={styles.button}>Вход</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;