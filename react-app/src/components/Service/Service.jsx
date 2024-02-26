import React from 'react';

function Service({ title, description }) {
    return (
        <li className="services__item">
            <p className="services__text">
                <strong>{title} </strong>
                {description}
            </p>
        </li>
    );
}

export default Service;
