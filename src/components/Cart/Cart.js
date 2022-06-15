import React from "react";

import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartItems = [{id: 'c1', name: "Sushi", amount: 2, price: 12.99}].map(
        item => <li>{item.name}</li>
    );

    return (
        <div>
            <ul className={classes.cartItems}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>100.00</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.buttonAlt}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    );
};

export default Cart;
