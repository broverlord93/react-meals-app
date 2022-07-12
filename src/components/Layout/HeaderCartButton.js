import React, {useContext, useEffect, useState} from "react";

import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const [btnIsHiglighted, setBtnIsHighlighted] = useState(false);
    const cartContext = useContext(CartContext);

    const numberOfCartItems = cartContext.items.reduce((curNumber, item) => curNumber += item.amount, 0);

    const {items} = cartContext;

    const btnClasses = `${classes.button} ${btnIsHiglighted ? classes.bump : ''}`;

    useEffect(() => {
        if (cartContext.items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
