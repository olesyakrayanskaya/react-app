import React, { useState } from 'react';
import './Header.css';
import logo from '/logo.svg';

const Header = () => {
    const [now, setNow] = useState(new Date());

    setInterval(() => setNow(new Date()), 1000);

    return (
        <header className="Header">
            <img className="Header__logo" src={logo} alt="logo"></img>
            <span className="Header__span">
                Время сейчас: {now.toLocaleTimeString()}
            </span>
        </header>
    );
};

export default Header;
