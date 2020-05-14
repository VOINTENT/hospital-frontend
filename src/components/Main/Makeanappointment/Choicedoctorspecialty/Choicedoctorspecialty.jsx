import React from "react";
import styles from "../../Login/Login.module.css";
import {Field} from "redux-form";
import {Input} from "../../../common/FormsControls/FormsControls";

const Choicedoctorspecialty = (props) =>

        const onSubmit = (formData) => {
             let {FIO} = formData;
                props.Choicedoctorspecialty(FIO);
};

return (
    <div className={styles.dx}>



        <ChoicedoctorspecialtyReduxForm onSubmit={onSubmit}/>
    </div>
);

};

const ChoicedoctorspecialtyForm = (props) => {
return (
    <form  onSubmit={props.handleSubmit}>
        <div>
            <h1 className={styles.z4}>Запись на прием к врачу</h1>
            <h2 className={styles.z1}>ФИО врача (можно неполные):</h2>
            <h2 className={styles.z2}>Специальность:</h2>
            <h2 className={styles.z3}>Сортировать по:</h2>


        </div>
        <div className={styles.dq}>

            <Field className={styles.input5} placeholder={"Введите ФИО врача"} name={"FIO"} component={Input}/>



            <button className={styles.butt1}>Найти</button>
            <button className={styles.butt2}>Запись на приём</button>

        </div>
    </form>

);
};
