import React from 'react';
import { rates } from '../../data';
import Button from '../Button/Button';
import { useState } from 'react';

function Rates() {
    const [rateContent, setRateContent] = useState();

    function handleClick(rate) {
        setRateContent(rate);
    }

    return (
        <section className="Rates">
            <Button
                isActive={rateContent === 'lite'}
                onClick={() => handleClick('lite')}
            >
                Host-Lite
            </Button>
            <Button
                isActive={rateContent === 'standart'}
                onClick={() => handleClick('standart')}
            >
                Host-Standart
            </Button>
            <Button
                isActive={rateContent === 'premium'}
                onClick={() => handleClick('premium')}
            >
                Host-Premium
            </Button>
            {!rateContent && (
                <p className="Rates__description">Выберите подходящий тариф</p>
            )}
            {rateContent && (
                <p className="Rates__description">{rates[rateContent]}</p>
            )}
        </section>
    );
}

export default Rates;
