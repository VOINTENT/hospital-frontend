import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = (props) => {
    return (
        <div className={styles.all1}>
        <nav className={styles.nav}>



                {props.isAuth
                    ? <NavLink className={styles.button12} to={'/profile'}>Личный кабинет</NavLink>
                    : <div></div>

                }
                {props.isAuth
                    ? <NavLink className={styles.button13} to={'/appointment'}>Записаться на прием</NavLink>
                    : <div></div>
                }



        </nav>
        </div>
    );
};

export default Navbar;