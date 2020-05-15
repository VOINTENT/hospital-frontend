import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = (props) => {
    return (
        <nav className={styles.nav}>


            <div>
                {props.isAuth
                    ? <NavLink className={styles.button12} to={'/profile'}>Личный кабинет</NavLink>
                    : <div></div>

                }
                {props.isAuth
                    ? <NavLink className={styles.button13} to={'/appointment'}>Записаться на приём</NavLink>
                    : <div></div>
                }
            </div>


        </nav>
    );
};

export default Navbar;