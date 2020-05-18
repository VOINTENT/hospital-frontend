import React from "react";
import styles from './Register.module.css'
import {withRouter} from "react-router-dom";

const Register = (props) => {


    const onClickAddRegister = (e) => {
        if (props.type === 'cancel') {
            props.removeRegister(e.target.name);
        } else if (props.type === 'add') {
            props.addRegister(e.target.name);
        }
        props.history.push('/profile');
    };

    let text = '';
    if (props.type === 'cancel') {
        text = 'Отменить запись';
    } else if (props.type === 'add') {
        text = 'Записаться';
    }

    return (

        <div >
            <div className={styles.brd}>
            <div>Врач: {props.doctor}</div>
            <div>Услуга: {props.service}</div>
            <div>Специальность: {props.specialty}</div>
            <div>Дата: {props.date}</div>
            <div>Время: {props.time}</div>
        </div>
            <div>
                <button className={styles.button40} name={props.id} onClick={onClickAddRegister}>{text}</button>
            </div>
     </div>
    );
};

export default withRouter(Register);