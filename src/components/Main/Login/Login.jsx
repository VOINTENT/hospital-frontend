import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {NavLink, Redirect} from "react-router-dom";
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



            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


const LoginForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit}>
            <div className={styles.dir}>

                <h1 className={styles.h1}>Вход</h1>

                <Field className={styles.input} placeholder={"Email или телефон"} name={"emailOrPhone"} component={Input}/>


                <Field className={styles.input} placeholder={"Пароль"} name={"password"} component={Input} type={"password"}/>


                <button className={styles.button}>Войти</button>

                <button className={styles.button1}>Забыли пароль?</button>
            </div>

            <div  className={styles.die}>
                <p className={styles.p}>Ещё нет аккаунта?</p>
                <NavLink to={'/SignUp'} className={styles.button2}>Зарегистрируйтесь</NavLink>

            </div>
        </form>

    );
};



const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;