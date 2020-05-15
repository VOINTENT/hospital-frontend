import {Field, reduxForm} from "redux-form";
import styles from "./Edit.module.css";
import {Email, Input} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";
import React from "react";




const Edit = (props) => {




    return (
        <div className={styles.dik}>

            <LoginReduxForm
                onSubmit={this.submit}
                initialValues={this.state.auth}
            />
        </div>
    );
};

const NOT_ENTER = 'Не указан';

const EditForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.dib}>
                <h1 className={styles.hh3}>Редактировать</h1>
                Имя: {props.firstName ? props.firstName : NOT_ENTER} <br/>
                <Field  className={styles.input3} placeholder={"Фамилия"} name={"lastName"} component={Input} validate={[required]}/>

                <Field className={styles.input3} placeholder={"Имя"} name={"firstName"} component={Input} validate={[required]}/>

                <Field className={styles.input3} placeholder={"Отчество"} name={"middleName"} component={Input} validate={[required]}/>
                <label className={styles.pol}>Пол:</label><br/>
                <input id="male" name="floor" type="radio" onClick="name()"/> мужской
                <input id="female" name="floor" type="radio" onClick="name()"/> женский
                <Field className={styles.input3} placeholder={"Email"} name={"email"} component={Email} validate={[required]}/>

                <Field  className={styles.input3} placeholder={"Номер телефона"} name={"phone_number"} component={Input} validate={[required]}/>
                <Field  className={styles.input3} placeholder={"Снилс"} name={"snils"} component={Input} validate={[required]}/>
                <Field className={styles.input3} placeholder={"Полис"} name={"polis"} component={Input} validate={[required]}/>

                <Field className={styles.input3} placeholder={"Дата рождения"} name={"birthday"} component={Input} validate={[required]}/>
                <input className={styles.button30} type="submit" value="Сохранить"/>
                <input className={styles.button31} type="submit" value="отмена"/>



            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({form: 'edit'})(EditForm);

export default Edit;