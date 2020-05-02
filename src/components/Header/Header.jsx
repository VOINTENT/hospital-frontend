import React from "react";
import styles from './Header.module.css'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <h3>Верхняя хрень</h3>
        </header>
    );
};

export default Header;