import { rates } from '../../data';
import Button from '../Button/Button';
import { useState } from 'react';
import classes from './Rates.module.css';

function Rates() {
    const [rateContent, setRateContent] = useState();

    function handleClick(rate) {
        setRateContent(rate);
    }

    return (
        <section className={classes.Rates}>
            <div className={classes.Rates__btns}>
            <Button
                className={classes.Rates__btn}
                isActive={rateContent === 'lite'}
                onClick={() => handleClick('lite')}
            >
                Host-Lite
            </Button>
            <Button
                className={classes.Rates__btn}
                isActive={rateContent === 'standart'}
                onClick={() => handleClick('standart')}
            >
                Host-Standart
            </Button>
            <Button
                className={classes.Rates__btn}
                isActive={rateContent === 'premium'}
                onClick={() => handleClick('premium')}
            >
                Host-Premium
            </Button>
            </div>
            {!rateContent && (
                <p className={classes.Rates__description}>
                    Выберите подходящий тариф
                </p>
            )}
            {rateContent && (
                <p className={classes.Rates__description}>
                    {rates[rateContent]}
                </p>
            )}
        </section>
    );
}

export default Rates;
