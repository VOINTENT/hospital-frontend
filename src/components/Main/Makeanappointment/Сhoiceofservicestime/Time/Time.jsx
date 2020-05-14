import styles from "../../../Login/Login.module.css";
import {Field} from "redux-form";
import {Input} from "../../../../common/FormsControls/FormsControls";
import React from "react";

const Time = (props) =>



return (
    <div className={styles.dx}>



        <TimeReduxForm onSubmit={onSubmit}/>
    </div>
);

};

const TimeForm = (props) => {
    return (
        <form  onSubmit={props.handleSubmit}>
            <div>
                <h1 className={styles.z5}>Запись на прием</h1>
                <h2 className={styles.z6}>Выбор группы услуг (специальности врача):</h2>
                <h2 className={styles.z7}>Выбор врача (кабинета,
                    услуги) и времени приема</h2>
                <h2 className={styles.z8}>Готово!</h2>
                <h2 className={styles.z9}>Базовое расписание</h2>
                <h2 className={styles.z11}>2</h2>
                <h2 className={styles.z12}>3</h2>


            </div>


            <div className={styles.dr}>

                <button className={styles.butt10}>1</button>
                <button className={styles.butt11}>Предыдущая неделя</button>
                <button className={styles.butt12}>Следующая неделя</button>
            </div>
            <div className={styles.dt}>

                <button className={styles.butt13}>10:00</button>
                <button className={styles.butt14}>10:30</button>
                <button className={styles.butt15}>11:00</button>
                <button className={styles.butt16}>11:30</button>
                <button className={styles.butt17}>12:00</button>
                <button className={styles.butt18}>12:30</button>
                <button className={styles.butt19}>13:00</button>
                <button className={styles.butt20}>13:30</button>
                <button className={styles.butt21}>14:00</button>
                <button className={styles.butt22}>14:30</button>
                <button className={styles.butt23}>15:00</button>
                <button className={styles.butt24}>15:30</button>
                <button className={styles.butt25}>16:00</button>
                <button className={styles.butt26}>16:30</button>
                <button className={styles.butt27}>17:00</button>
                <button className={styles.butt28}>17:30</button>
                <button className={styles.butt29}>18:00</button>
            </div>
            <div className={styles.dy}>

                <button className={styles.butt30}>10:00</button>
                <button className={styles.butt31}>10:30</button>
                <button className={styles.butt32}>11:00</button>
                <button className={styles.butt33}>11:30</button>
                <button className={styles.butt34}>12:00</button>
                <button className={styles.butt35}>12:30</button>
                <button className={styles.butt36}>13:00</button>
                <button className={styles.butt37}>13:30</button>
                <button className={styles.butt38}>14:00</button>
                <button className={styles.butt39}>14:30</button>
                <button className={styles.butt40}>15:00</button>
                <button className={styles.butt41}>15:30</button>
                <button className={styles.butt42}>16:00</button>
                <button className={styles.butt43}>16:30</button>
                <button className={styles.butt44}>17:00</button>
                <button className={styles.butt45}>17:30</button>
                <button className={styles.butt46}>18:00</button>
            </div>
            <div className={styles.du}>

                <button className={styles.butt47}>10:00</button>
                <button className={styles.butt48}>10:30</button>
                <button className={styles.butt49}>11:00</button>
                <button className={styles.butt50}>11:30</button>
                <button className={styles.butt51}>12:00</button>
                <button className={styles.butt52}>12:30</button>
                <button className={styles.butt53}>13:00</button>
                <button className={styles.butt54}>13:30</button>
                <button className={styles.butt55}>14:00</button>
                <button className={styles.butt56}>14:30</button>
                <button className={styles.butt57}>15:00</button>
                <button className={styles.butt58}>15:30</button>
                <button className={styles.butt59}>16:00</button>
                <button className={styles.butt60}>16:30</button>
                <button className={styles.butt61}>17:00</button>
                <button className={styles.butt62}>17:30</button>
                <button className={styles.butt63}>18:00</button>
            </div>
            <div className={styles.di}>

                <button className={styles.butt64}>10:00</button>
                <button className={styles.butt65}>10:30</button>
                <button className={styles.butt66}>11:00</button>
                <button className={styles.butt67}>11:30</button>
                <button className={styles.butt68}>12:00</button>
                <button className={styles.butt69}>12:30</button>
                <button className={styles.butt70}>13:00</button>
                <button className={styles.butt71}>13:30</button>
                <button className={styles.butt72}>14:00</button>
                <button className={styles.butt73}>14:30</button>
                <button className={styles.butt74}>15:00</button>
                <button className={styles.butt75}>15:30</button>
                <button className={styles.butt76}>16:00</button>
                <button className={styles.butt77}>16:30</button>
                <button className={styles.butt78}>17:00</button>
                <button className={styles.butt79}>17:30</button>
                <button className={styles.butt80}>18:00</button>
            </div>
            <div className={styles.do}>

                <button className={styles.butt81}>10:00</button>
                <button className={styles.butt82}>10:30</button>
                <button className={styles.butt83}>11:00</button>
                <button className={styles.butt84}>11:30</button>
                <button className={styles.butt85}>12:00</button>
                <button className={styles.butt86}>12:30</button>
                <button className={styles.butt87}>13:00</button>
                <button className={styles.butt88}>13:30</button>
                <button className={styles.butt89}>14:00</button>
                <button className={styles.butt90}>14:30</button>
                <button className={styles.butt91}>15:00</button>
                <button className={styles.butt92}>15:30</button>
                <button className={styles.butt93}>16:00</button>
                <button className={styles.butt94}>16:30</button>
                <button className={styles.butt95}>17:00</button>
                <button className={styles.butt96}>17:30</button>
                <button className={styles.butt97}>18:00</button>
            </div>
            <div className={styles.dp}>

                <button className={styles.butt98}>10:00</button>
                <button className={styles.butt99}>10:30</button>
                <button className={styles.butt100}>11:00</button>
                <button className={styles.butt101}>11:30</button>
                <button className={styles.butt102}>12:00</button>
                <button className={styles.butt103}>12:30</button>
                <button className={styles.butt104}>13:00</button>
                <button className={styles.butt105}>13:30</button>
                <button className={styles.butt106}>14:00</button>
                <button className={styles.butt107}>14:30</button>
                <button className={styles.butt108}>15:00</button>
                <button className={styles.butt109}>15:30</button>
                <button className={styles.butt110}>16:00</button>
                <button className={styles.butt111}>16:30</button>
                <button className={styles.butt112}>17:00</button>
                <button className={styles.butt113}>17:30</button>
                <button className={styles.butt114}>18:00</button>
            </div>
            <div className={styles.dl}>

                <button className={styles.butt115}>10:00</button>
                <button className={styles.butt116}>10:30</button>
                <button className={styles.butt117}>11:00</button>
                <button className={styles.butt118}>11:30</button>
                <button className={styles.butt119}>12:00</button>
                <button className={styles.butt120}>12:30</button>
                <button className={styles.butt121}>13:00</button>
                <button className={styles.butt122}>13:30</button>
                <button className={styles.butt123}>14:00</button>
                <button className={styles.butt124}>14:30</button>
                <button className={styles.butt125}>15:00</button>
                <button className={styles.butt126}>15:30</button>
                <button className={styles.butt127}>16:00</button>
                <button className={styles.butt128}>16:30</button>
                <button className={styles.butt129}>17:00</button>
                <button className={styles.butt130}>17:30</button>
                <button className={styles.butt131}>18:00</button>
            </div>

        </form>

    );
};
