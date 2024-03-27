import Button from '../Button/Button';
import classes from './Navigation.module.css';

function Navigation({ active, onChange }) {
    return (
        <section className={classes.Navigation}>
            <Button
                isActive={active === 'main'}
                onClick={() => onChange('main')}
            >
                Главная
            </Button>
            <Button
                isActive={active === 'feedback'}
                onClick={() => onChange('feedback')}
            >
                Связаться с нами
            </Button>
            <Button
                isActive={active === 'reviews'}
                onClick={() => onChange('reviews')}
            >
                Отзывы наших клиентов
            </Button>

        </section>
    );
}

export default Navigation;
