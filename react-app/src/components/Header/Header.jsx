import React, { useState } from 'react';
import './Header.css';
import logo from '/logo.svg';

const Header = () => {

    return (
        <header className="Header">
            <img className="Header__logo" src={logo} alt="logo"></img>
        </header>
    );
};

export default Header;
