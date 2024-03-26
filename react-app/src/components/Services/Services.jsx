import Service from '../Service/Service';
import { services } from '../../data';
import classes from './Services.module.css';

function Services() {
    return (
        <section className={classes.Services}>
            <h2 className={classes.Services__title}>Наши услуги:</h2>
            <ul className={classes.Services__list}>
                {services.map((s) => (
                    <Service key={s.title} {...s} />
                ))}
            </ul>
        </section>
    );
}

export default Services;
