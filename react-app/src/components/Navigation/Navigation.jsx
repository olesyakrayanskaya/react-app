import Button from '../Button/Button';

function Navigation({ active, onChange }) {
    return (
        <section className="Navigation">
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
        </section>
    );
}

export default Navigation;
