import React, {useContext, useEffect, useState} from 'react';
import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import {cleanup} from "@testing-library/react";


const HeaderCartButton = (props) => {
    const [buttonIsAnimated, setButtonIsAnimated] = useState(false)
    const cartContext = useContext(CartContext)

    const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount
    }, 0)

    const buttonClasses = `${styles.button} ${buttonIsAnimated ? styles.bump : ''}`


    useEffect(() => {
        if (cartContext.items === 0) return

        setButtonIsAnimated(true)

        const timer = setTimeout(() => {
            setButtonIsAnimated(false)

        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [cartContext.items])
    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon/>
            </span>
            <span> Корзина</span>

            <span className={styles.badge}>{cartItemsNumber}</span>
        </button>
    );
};

export default HeaderCartButton;