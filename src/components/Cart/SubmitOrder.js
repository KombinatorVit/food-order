import React from 'react';
import styles from './SubmitOrder.module.css'

const SubmitOrder = (props) => {
    return (
        <form>
            <div className={styles.control}>
                <label htmlFor={'name'}>
                    Введите имя
                </label>
                <input type={'text'} id={'name'}/>
            </div>

            <div className={styles.control}>
                <label htmlFor={'name'}>
                    Введите имя
                </label>
                <input type={'text'} id={'name'}/>
            </div>

        </form>
    );
};

export default SubmitOrder;