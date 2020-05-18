import React from "react";
import {NavLink, Redirect} from "react-router-dom";
import styles from "./Profile.module.css";
import RegisterContainer from "../Appointment/Register/RegisterContainer";




const Profile = (props) => {
    let registers = props.registers.map(register => <RegisterContainer id={register.id} doctor={register.doctor}
                                                                      service={register.service}
                                                                      specialty={register.specialty}
                                                                      date={register.date} time={register.time}/>);



    if (!props.isAuth) {
        return <Redirect to="/login"/>

    }

    const NOT_ENTER = 'Не указан';

    let gender = 'Не выбран';
    if (props.gender === 1 || props.gender === '1') {
        gender = 'Мужской'
    } else if (props.gender === 2 || props.gender === '2') {
        gender = 'Женский';
    }

    return (

        <div className={styles.did}>

            <div>
                <h3 className={styles.h4}>Личный кабинет</h3>
                <h2 className={styles.h9}>Информация:</h2>
                <h2 className={styles.l9}>Данные записи:</h2>
            </div>



            <div className={styles.diy}>
                Имя: {props.firstName ? props.firstName : NOT_ENTER} <br/>
                Фамилия: {props.lastName ? props.lastName : NOT_ENTER} <br/>
                Отчество: {props.middleName ? props.middleName : NOT_ENTER} <br/>
                Пол: {gender} <br/>
                Дата рождения: {props.birthDate ? props.birthDate : NOT_ENTER} <br/>
                Снилс: {props.snils ? props.snils : NOT_ENTER} <br/>
                Полис: {props.policy ? props.policy : NOT_ENTER} <br/>
                Email: {props.email ? props.email : NOT_ENTER} <br/>
                Номер телефона: {props.phoneNumber ? props.phoneNumber : NOT_ENTER} <br/>
                <NavLink to={'/Edit'} className={styles.button27}>Редактировать</NavLink>
            </div>


                <div className={styles.brf}>
                    <div>Врач: {props.doctor}</div>
                    <div>Услуга: {props.service}</div>
                    <div>Специальность: {props.specialty}</div>
                    <div>Дата: {props.date}</div>
                    <div>Время: {props.time}</div>
                    <input className={styles.button100} name={props.id}  type="submit" value="Отмена записи"/>
                </div>
            {registers} </div>




    )
};

export default Profile;