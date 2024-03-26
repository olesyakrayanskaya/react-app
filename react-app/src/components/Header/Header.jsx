import React from 'react';
import  classes from './Header.module.css';
import logo from '/logo.svg';

const Header = () => {

    return (
        <header className={classes.Header}>
            <img className={classes.Header__logo} src={logo} alt="logo"></img>
        </header>
    );
};

export default Header;
