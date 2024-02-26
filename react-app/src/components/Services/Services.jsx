import React from 'react';
import Service from '../Service/Service';
import { services } from '../../data';

function Services() {
    return (
        <section className="Services">
            <h2 className="Services__title">Наши услуги:</h2>
            <ul className="Services__list">
                {services.map((s) => (
                    <Service key={s.title} {...s} />
                ))}
            </ul>
        </section>
    );
}

export default Services;
