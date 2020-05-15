import React from "react";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Input, Password, Email} from "../../common/FormsControls/FormsControls";
import {matchPassword, required} from "../../../utils/validators/validators";
import styles from "./SignUp.module.css";

const SignUp = (props) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    const onSubmit = (formData) => {
        let {lastName, firstName, middleName, email, phone_number, password} = formData;
        props.signup(lastName, firstName, middleName, email, phone_number, password);
    };

    return (
        <div className={styles.div}>

            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const SignUpForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.dir}>
                <h3 className={styles.h3}>Регистрация</h3>
                <Field  className={styles.input1} placeholder={"Фамилия"} name={"lastName"} component={Input} validate={[required]}/>

                <Field className={styles.input1} placeholder={"Имя"} name={"firstName"} component={Input} validate={[required]}/>

                <Field className={styles.input1} placeholder={"Отчество"} name={"middleName"} component={Input} validate={[required]}/>

                <Field className={styles.input1} placeholder={"Email"} name={"email"} component={Email} validate={[required]}/>

                <Field  className={styles.input1} placeholder={"Номер телефона"} name={"phone_number"} component={Input} validate={[required]}/>

                <Field className={styles.input1} placeholder={"Пароль"} name={"password"} component={Password} validate={[required]}/>

                <Field  className={styles.input1} placeholder={"Повторите пароль"} name={"confirmPassword"} component={Password} validate={[required, matchPassword]}/>

                <button className={styles.button15 }>Регистрация</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'signup'})(SignUpForm);

export default SignUp;