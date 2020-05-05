import React from "react";
import {Redirect} from "react-router-dom";

const Profile = (props) => {

    if (!props.isAuth) {
        return <Redirect to="/login"/>
    }

    const NOT_ENTER = 'Не указан';

    return (
        <div>
            <h3>Личный кабинет</h3>
            Имя: {props.firstName ? props.firstName : NOT_ENTER} <br/>
            Фамилия: {props.lastName ? props.lastName : NOT_ENTER} <br/>
            Отчество: {props.middleName ? props.middleName : NOT_ENTER} <br/>
            Пол: {props.gender ? props.gender : NOT_ENTER} <br/>
            Дата рождения: {props.birthDate ? props.birthDate : NOT_ENTER} <br/>
            Снилс: {props.snils ? props.snils : NOT_ENTER} <br/>
            Полис: {props.policy ? props.policy : NOT_ENTER} <br/>
            Email: {props.email ? props.email : NOT_ENTER} <br/>
            Номер телефона: {props.phoneNumber ? props.phoneNumber : NOT_ENTER} <br/>
        </div>
    );
};

export default Profile;