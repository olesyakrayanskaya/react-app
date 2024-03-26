import classes from './Service.module.css';

function Service({ title, description }) {
    return (
        <li className={classes.Services__item}>
            <p className={classes.Services__text}>
                <strong className={classes.Services__title}>{title} </strong>
                {description}
            </p>
        </li>
    );
}

export default Service;
