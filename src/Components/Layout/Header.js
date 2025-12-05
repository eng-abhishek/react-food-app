import { Fragment } from "react";
import mealsImage from '../../assets/meal2.jpg';
import classes from '../../Components/Layout/Header.module.css';
import HeaderCardButton from "./HeaderCartButton";

const Header = props => {
    return <>
    <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
    <HeaderCardButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='a table full of delicious meal'/>
        </div>
    </Fragment>
    </>
}

export default Header;