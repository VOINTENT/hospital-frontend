import styles from "../../../Login/Login.module.css";
import {Field} from "redux-form";
import {Input} from "../../../../common/FormsControls/FormsControls";
import React from "react";

const Services = (props) =>

return (
    <div className={styles.dc}>



        <ServicesReduxForm onSubmit={onSubmit}/>
    </div>
);



const ServicesForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit}>
            <div>
                <h1 className={styles.z5}>Запись на прием к врачу</h1>
                <h2 className={styles.z6}>Выбор группы услуг (специальности врача):</h2>
                <h2 className={styles.z7}>Выбор врача (кабинета,
                    услуги) и времени приема</h2>
                <h2 className={styles.z8}>Готово!</h2>
                <h2 className={styles.z9}>Базовое расписание</h2>
                <h2 className={styles.z10}>1</h2>
                <h2 className={styles.z11}>2</h2>
                <h2 className={styles.z12}>3</h2>


            </div>
            <div className={styles.dw}>

                <button className={styles.butt4}>Анализы</button>
                <button className={styles.butt5}>Запись на лечение</button>
                <button className={styles.butt6}>Консультация специалиста</button>
                <button className={styles.butt7}>Обследование</button>
                <button className={styles.butt8}>Первичный приём</button>
                <button className={styles.butt9}>Повторный приём</button>


            </div>
        </form>

    );
};
