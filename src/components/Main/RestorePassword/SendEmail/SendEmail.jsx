import React from "react";
import {Email} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Redirect, withRouter} from "react-router-dom";
import styles from "./SendEmail.module.css";

const SendEmail = (props) => {

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    const onSubmit = (formData) => {
        let {email} = formData;
        props.restorePassword(email);
        props.history.push('/restore-password/await-confirm');
    };

    return (
        <div className={styles.dig}>

            <RestorePasswordReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const RestorePasswordForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.din}>
            <h2 className={styles.h4}>Восстановить пароль</h2>
            <h3 className={styles.h5}>Введите ваш email:</h3>
            <Field className={styles.input3} placeholder={"Email"} name={"email"} component={Email} validate={[required]}/>
            <button className={styles.button21}>Отправить письмо</button>
            </div>
            </form>
    );
};

const RestorePasswordReduxForm = reduxForm({form: 'restorePassword'})(RestorePasswordForm);

export default withRouter(SendEmail);