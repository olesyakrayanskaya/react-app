import './App.css';
import Header from './components/Header/Header';
import Service from './components/Service/Service';
import { services, rates } from './components/data';
import Button from './components/Button/Button';
import { useState } from 'react';

function App() {
    const [rateContent, setRateContent] = useState();

    function handleClick(rate) {
        setRateContent(rate);
    }

    return (
        <div>
            <Header />
            <main>
                <h1>Виртуальный хостинг для сайта</h1>
                <section className="Services">
                    <h2 className="Services__title">Наши услуги:</h2>
                    <ul className="Services__list">
                        {services.map((s) => (
                            <Service key={s.title} {...s} />
                        ))}
                    </ul>
                </section>
                <section className="rates">
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
                        <p className="rates__description">
                            Выберите подходящий тариф
                        </p>
                    )}
                    {rateContent && (
                        <p className="rates__description">
                            {rates[rateContent]}
                        </p>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
