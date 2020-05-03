import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            Верхняя хрень
            <div className={styles.loginBlock}>
                { props.isAuth
                    ? <div>{props.email} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Login</NavLink> }

                {/*{ props.isAuth ? <div><h4>Не авторизован</h4></div> : <div><h4>Авторизован</h4></div >}*/}
            </div>
        </header>
    );
};

export default Header;