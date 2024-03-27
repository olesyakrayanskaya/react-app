import classes from './Button.module.css';

function Button({ children, isActive, ...props }) {
    return (
        <button
            {...props}
            className={
                isActive
                    ? `${classes.Btn} ${classes.Btn_active}`
                    : `${classes.Btn}`
            }
        >
            {children}
        </button>
    );
}

export default Button;
