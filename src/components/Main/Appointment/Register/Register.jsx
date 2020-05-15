import React from "react";
import styles from './Register.module.css'

const Register = (props) => {
    return (
        <div className={styles.brd}>
            <div>Врач: {props.doctor.name}</div>
            <div>Услуга: {props.service.name}</div>
            <div>Специальность: {props.specialty.name}</div>
            <div>Дата: {props.date}</div>
            <div>Время: {props.time}</div>
        </div>
    );
};

export default Register;