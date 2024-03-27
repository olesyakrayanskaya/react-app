import { useState } from 'react';
import classes from './Feedback.module.css';

function Feedback() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        tel: '',
        rate: '',
    });
    return (
        <section className={classes.Feedback}>
            <h2 className={classes.Feedback__title}>Обратная связь</h2>
            <legend className={classes.Feedback__legend}>
                Заполните, пожалуйста, форму:
            </legend>
            <form action="post" className={classes.Feedback__form}>
                <fieldset className={classes.Feedback__fieldset}>
                    <label htmlFor="name" className={classes.Feedback__label}>
                        Ваше имя:
                    </label>
                    <input
                        type="text"
                        className={classes.Feedback__input}
                        id="name"
                        onChange={(event, prev) =>
                            setForm({ ...prev, name: event.target.value })
                        }
                        title="Ваше имя"
                    />
                </fieldset>
                <fieldset className={classes.Feedback__fieldset}>
                    <label htmlFor="email" className={classes.Feedback__label}>
                        Адрес электронной почты:
                    </label>
                    <input
                        type="email"
                        className={classes.Feedback__input}
                        id="email"
                        onChange={(event, prev) =>
                            setForm({ ...prev, email: event.target.value })
                        }
                        title="Ваш email"
                    />
                </fieldset>
                <fieldset className={classes.Feedback__fieldset}>
                    <label htmlFor="tel" className={classes.Feedback__label}>
                        Ваш номер телефона:
                    </label>
                    <input
                        type="tel"
                        className={classes.Feedback__input}
                        id="tel"
                        onChange={(event, prev) =>
                            setForm({ ...prev, tel: event.target.value })
                        }
                        title="Ваш номер телефона"
                    />
                </fieldset>
                <fieldset className={classes.Feedback__fieldset}>
                    <label htmlFor="rate" className={classes.Feedback__label}>
                        Выберите тариф:
                    </label>
                    <select
                        name="rates"
                        id="rate"
                        className={classes.Feedback__select}
                        onChange={(event, prev) =>
                            setForm({ ...prev, rate: event.target.value })
                        }
                    >
                        <option
                            className={classes.Feedback__option}
                            value="lite"
                        >
                            lite
                        </option>
                        <option
                            className={classes.Feedback__option}
                            value="standart"
                        >
                            standart
                        </option>
                        <option
                            className={classes.Feedback__option}
                            value="premium"
                        >
                            premium
                        </option>
                    </select>
                </fieldset>
                <button className={classes.Feedback__btn} type='submit'>Отправить</button>
            </form>
        </section>
    );
}

export default Feedback;
