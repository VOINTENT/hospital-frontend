import React from "react";
import {Redirect} from "react-router-dom";

const Profile = (props) => {

    if (!props.isAuth) {
        return <Redirect to="/login"/>
    }

    return (
        <div>
            <h3>Личный кабинет</h3>
            Имя: {props.firstName} <br/>
            Фамилия: {props.lastName} <br/>
            Отчество: {props.middleName} <br/>
            Пол: {null} <br/>
            Дата рождения: {props.birthDate} <br/>
            Снилс: {props.snils} <br/>
            Полис: {props.policy} <br/>
            Email: {props.email} <br/>
            Номер телефона: {props.phoneNumber} <br/>
        </div>
    );
};

export default Profile;