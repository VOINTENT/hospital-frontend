import {Field, reduxForm} from "redux-form";
import styles from "./Edit.module.css";
import {Email, Input} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";
import React from "react";
import {connect} from "react-redux";


const Edit = (props) => {

    const onSubmit = (formData) => {
        let {lastName, firstName, middleName, email, phone_number, password} = formData;
        props.signup(lastName, firstName, middleName, email, phone_number, password);
    };

    const getInitialValue = () => {
        return ({
            firstName: props.firstName,
            lastName: props.lastName,
            middleName: props.middleName,
            birthDate: props.birthDate,
            snils: props.snils,
            policy: props.policy,
            email: props.email,
            gender: props.gender,
            phoneNumber: props.phoneNumber
        });
    };

    return (
        <div className={styles.dik}>

            <EditReduxForm
                onSubmit={onSubmit}
                initialValues={getInitialValue()}
            />
        </div>
    );
};

// const NOT_ENTER = 'Не указан';

class EditForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className={styles.dib}>
                    <h1 className={styles.hh3}>Редактировать</h1>
                    {/*Имя: {props.firstName ? props.firstName : NOT_ENTER} <br/>*/}
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
    }
}

const mapStateToProps = (state) => ({
    initialValues: state.auth
});

const EditReduxForm = connect(mapStateToProps)(reduxForm({form: 'edit', enableReinitialize: true})(EditForm));

// const EditReduxForm = reduxForm({form: 'edit'})(EditForm);
// const EditReduxFormInitialize = connect(state => ({initialValues: state.auth.data}),{})(EditReduxForm);
//
export default Edit;