import React from 'react';
import logo from '../../assets/sushi.jpg'
import styles from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Япона</h1>
                <HeaderCartButton/>
            </header>
            <div className={styles['main-image']}><img src={logo} alt={'logo'}/></div>
        </>
    );
};

export default Header;