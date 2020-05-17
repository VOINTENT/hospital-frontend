import React from "react";
import styles from './Register.module.css'

const Register = (props) => {
    return (
        <div >
            <div className={styles.brd}>
            <div>Врач: {props.doctor.name}</div>
            <div>Услуга: {props.service.name}</div>
            <div>Специальность: {props.specialty.name}</div>
            <div>Дата: {props.date}</div>
            <div>Время: {props.time}</div>
        </div>
            <div>
                <button className={styles.button40}>Записаться</button>
            </div>
     </div>
    );
};

export default Register;