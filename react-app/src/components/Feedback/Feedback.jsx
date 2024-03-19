import { useState } from 'react';
import Button from '../Button/Button';

function Feedback() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        tel: '',
        rate: '',
    });
    return (
        <section className="Feedback">
            <h2 className="Feedback__title">Обратная связь</h2>
            <legend className="Feedback__legend">
                Заполните, пожалуйста, форму:
            </legend>
            <form action="post" className="Feedback__form">
                <label htmlFor="name" className="Feedback__label">
                    Ваше имя:
                </label>
                <input
                    type="text"
                    className="Feedback__form"
                    id="name"
                    onChange={(event, prev) =>
                        setForm({ ...prev, name: event.target.value })
                    }
                    title="Ваше имя"
                />
                <label htmlFor="email" className="Feedback__label">
                    Адрес электронной почты:
                </label>
                <input
                    type="email"
                    className="Feedback__form"
                    id="email"
                    onChange={(event, prev) =>
                        setForm({ ...prev, email: event.target.value })
                    }
                    title="Ваш email"
                />
                <label htmlFor="tel" className="Feedback__label">
                    Ваш номер телефона:
                </label>
                <input
                    type="tel"
                    className="Feedback__form"
                    id="tel"
                    onChange={(event, prev) =>
                        setForm({ ...prev, tel: event.target.value })
                    }
                    title="Ваш номер телефона"
                />
                <label htmlFor="rate" className="Feedback__label">
                    Выберите тариф:
                </label>
                <select
                    name="rates"
                    id="rate"
                    className="Feedback__select"
                    onChange={(event, prev) =>
                        setForm({ ...prev, rate: event.target.value })
                    }
                >
                    <option className="Feedback__option" value="lite">
                        lite
                    </option>
                    <option className="Feedback__option" value="standart">
                        standart
                    </option>
                    <option className="Feedback__option" value="premium">
                        premium
                    </option>
                </select>
                <Button>Отправить</Button>
            </form>
        </section>
    );
}

export default Feedback;
