import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartContext.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartContext.addItem({...item, amount: 1});
    };

    const cartItems = cartContext.items.map(
        item => {
            return (<CartItem key={item.id}
                              id={item.id}
                              name={item.name}
                              price={item.price}
                              amount={item.amount}
                              onAdd={cartItemAddHandler.bind(null, item)}
                              onRemove={cartItemRemoveHandler.bind(null, item.id)}
            />);
        }
    );

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
