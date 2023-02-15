import React from 'react';
import logo from '../../assets/sushi.jpg'
import styles from './Header.module.css'

const Header = (props) => {
    return (
        <>
            <header className={styles.header}>
                <h1>Япона</h1>
                <button>Корзина</button>
            </header>
            <div className={styles['main-image']}><img src={logo} alt={'logo'}/></div>
        </>
    );
};

export default Header;