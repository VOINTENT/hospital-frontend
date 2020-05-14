import styles from "../../../Login/Login.module.css";
import {Field} from "redux-form";
import {Input} from "../../../../common/FormsControls/FormsControls";
import React from "react";

const Done = (props) =>



return (
    <div className={styles.dm}>



        <DoneReduxForm onSubmit={onSubmit}/>
    </div>
);

};

const DoneForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit}>
            <div>
                <h1 className={styles.z13}>Вы успешно записались на прием</h1>
                <h2 className={styles.z14}>Информация о записи у вас личном кабинете</h2>
                <h2 className={styles.z15}>Спасибо, что желаете записаться в нашу клинику! В ближайшее время администратор свяжется с вами для уточнения деталей.</h2>
                <h2 className={styles.z16}>Запись на приём</h2>
                <h2 className={styles.z17}>Запись произведена</h2>
                <h2 className={styles.z18}>Выбор группы услуг (специальности врача):</h2>
                <h2 className={styles.z19}>Выбор врача (кабинета,
                    услуги) и времени приема</h2>
                <h2 className={styles.z20}>Готово!</h2>


            </div>
            <div className={styles.dq}>
                <button className={styles.butt134}>1</button>
                <button className={styles.butt135}>2</button>
                <button className={styles.butt136}>Записаться к другому врачу</button>
            </div>
        </form>

    );
};
