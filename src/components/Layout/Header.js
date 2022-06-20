import React from "react";

import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </header>
            <div>
                <img
                    className={classes.mainImage}
                    src={mealsImage}
                    alt="A table full of delicious food!"/>
            </div>
        </React.Fragment>
    );
};

export default Header;
