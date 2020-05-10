import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>

            <div>
                <NavLink className={styles.button12}  to={'/profile'}>Личный кабинет</NavLink>
                <NavLink className={styles.button13} to={'/z'}>Записаться на приём</NavLink>
            </div>

        </nav>
    );
};

export default Navbar;