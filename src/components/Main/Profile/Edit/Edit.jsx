import {Field, reduxForm} from "redux-form";
import styles from "./Edit.module.css";
import {Input, Radio} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";
import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


const Edit = (props) => {

    const onSubmit = (formData) => {
        let {firstName, lastName, middleName, gender, snils, policy, birthDate} = formData;
        if (gender === null) {
            gender = 3
        }
        props.updateUserData(firstName, lastName, middleName, gender, snils, policy, birthDate);
        props.history.push('/profile');
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
                    <Field  className={styles.input3} placeholder={"Фамилия"} name={"lastName"} component={Input} validate={[required]}/>

                    <Field className={styles.input3} placeholder={"Имя"} name={"firstName"} component={Input} validate={[required]}/>

                    <Field className={styles.input3} placeholder={"Отчество"} name={"middleName"} component={Input} validate={[required]}/><br/>
                    <label className={styles.pol}>Пол:</label><br/>
                    {/*<div className={styles.pol1}>*/}
                    {/*    <input id="male" name="gender" value="1" type="radio"/> мужской*/}
                    {/*</div>*/}
                    {/*<div className={styles.pol2}>*/}
                    {/*    <input id="female" name="gender" value="2" type="radio"/> женский*/}
                    {/*</div>*/}

                    <div className={styles.pol1}>
                        <Field className={styles.pol1} id="male" name="gender" component={Radio} props={{ value: "1" }}/>
                        Мужской
                    </div>
                    <div className={styles.pol2}>
                        <Field className={styles.pol1} id="female" name="gender" component={Radio} props={{ value: "2" }}/>
                        Женский
                    </div>

                    <Field  className={styles.input3} placeholder={"Снилс"} name={"snils"} component={Input} validate={[required]}/>
                    <Field className={styles.input3} placeholder={"Полис"} name={"policy"} component={Input} validate={[required]}/>

                    <Field className={styles.input3} placeholder={"Дата рождения"} name={"birthDate"} component={Input} validate={[required]}/>
                    <input className={styles.button30} type="submit" value="Сохранить"/>
                    <input className={styles.button31}  value="Отмена"/>

                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    initialValues: state.auth
});

const EditReduxForm = connect(mapStateToProps)(reduxForm({form: 'edit', enableReinitialize: true})(EditForm));

export default withRouter(Edit);