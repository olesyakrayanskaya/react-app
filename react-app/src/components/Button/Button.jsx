import './Button.css';
import React from 'react';

function Button({ children, onClick, isActive }) {
    return (
        <button className={isActive ? 'btn btn_active' : 'btn'} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
