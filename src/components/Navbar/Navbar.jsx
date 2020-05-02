import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>
            <div>
                <NavLink to={'/signup'}>Регистрация</NavLink>
            </div>
            <div>
                <NavLink to={'/login'}>Войти</NavLink>
            </div>
            <div>
                <NavLink to={'/profile'}>Личный кабинет</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;