import Service from '../Service/Service';
import { services } from '../../data';
import classes from './Services.module.css';
import image from '../../assets/images/Group.svg';

function Services() {
    return (
        <section className={classes.Services}>
            <h2 className={classes.Services__title}>Наши услуги:</h2>
            <div className={classes.Services__content}>
                <ul className={classes.Services__list}>
                    {services.map((s) => (
                        <Service key={s.title} {...s} />
                    ))}
                </ul>
                <img
                    className={classes.Services__img}
                    src={image}
                    width={400}
                    aria-hidden="true"
                ></img>
            </div>
        </section>
    );
}

export default Services;
