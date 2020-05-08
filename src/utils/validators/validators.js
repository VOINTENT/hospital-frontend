import styles from "../../components/Main/SignUp/SignUp.module.css";
import React from "react";

export const required = (value) => {
    if (value) return undefined;
    return ( <h2 className={styles.span}>!</h2>)
};

export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if (value && value.length > maxLength) return `Максимальная длина поля: ${maxLength}`;
        return undefined;
    };
};

export const matchPassword = (confirmPassword, allInputs) => {
    if (confirmPassword === allInputs.password) {
        return undefined;
    }
    return ( <h2 className={styles.spar}>Пароли не совпадают. Повторите попытку</h2>)
};