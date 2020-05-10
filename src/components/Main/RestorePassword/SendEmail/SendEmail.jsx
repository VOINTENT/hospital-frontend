import React from "react";
import {Email} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Redirect, withRouter} from "react-router-dom";

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
        <div>
            <h2>Восстановить пароль</h2>
            <h3>Введите ваш email</h3>
            <RestorePasswordReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const RestorePasswordForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={"Email"} name={"email"} component={Email} validate={[required]}/>
            <button>Отправить письмо</button>
        </form>
    );
};

const RestorePasswordReduxForm = reduxForm({form: 'restorePassword'})(RestorePasswordForm);

export default withRouter(SendEmail);