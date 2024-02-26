import './Button.css';
import React from 'react';

function Button({ children, onClick, isActive }) {
    return (
        <button className={isActive ? 'Btn Btn_active' : 'Btn'} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
