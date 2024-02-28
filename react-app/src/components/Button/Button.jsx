import classes from './Button.module.css';
import React from 'react';

function Button({ children, onClick, isActive }) {
    return (
        <button
            className={
                isActive
                    ? `${classes.Btn} ${classes.Btn_active}`
                    : `${classes.Btn}`
            }
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
