import React from "react";
import styles from "./AwaitConfirm.module.css";

const AwaitConfirm = (props) => {
    return (
        <div className={styles.dik}>
        <div className={styles.dil}>
           <h1 className={styles.h6}> Пожалуйста, проверьте вашу электроную почту   </h1>
            <h3 className={styles.h7}> Мы отправили письмо на Ваш емейл </h3>
            <h2 className={styles.h8}>Пожалуйста, откройте письмо и перейдите по ссылке для восстановления пароля</h2>
        </div>
        </div>
    );
};

export default AwaitConfirm;