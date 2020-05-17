import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (
        <div className={styles.all1}>
        <header className={styles.header}>




            <img className={styles.header_img} src={require('../../assets/images/1.png')} alt="logo"/>



            <h1 className={styles.h7}>
                Министерство здравоохранения Республики Татарстан
            </h1>
            <h1 className={styles.h7}>
                ГАУЗ «Республиканская клиническая инфекционная больница
                                      имени профессора А.Ф.Агафонова»
             </h1>


                { props.isAuth
                    ? <div className={styles.button5}>{props.email}  <button className={styles.button9} onClick={props.logout}>Выход из системы</button></div>
                    : <NavLink className={styles.button6} to={'/login'}>Войти</NavLink> }

                { props.isAuth
                    ? <div> </div>

                :<NavLink className={styles.button14} to={'/signUp'}>Зарегистрироваться</NavLink>}

        </header>
        </div>
    );
};

export default Header;