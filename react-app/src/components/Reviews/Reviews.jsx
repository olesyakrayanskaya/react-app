import { useEffect, useState } from 'react';
import classes from './Reviews.module.css';
import './Reviews.css';
import { clients } from '../../clients';
import prev from '../../assets/images/arrow_left.svg';
import next from '../../assets/images/arrow_right.svg';

function Reviews() {
    const [users, setUsers] = useState(clients);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const lastIndex = clients.length - 1;
        if (currentIndex < 0) {
            setCurrentIndex(lastIndex);
        }
        if (currentIndex > lastIndex) {
            setCurrentIndex(0);
        }
    }, [currentIndex, clients]);

    return (
        <section className={classes.Reviews}>
            <h2 className={classes.Reviews__title}>
                <span className={classes.Reviews__slash}>/</span>Отзывы наших
                клиентов
            </h2>
            <div className={classes.Rewiews__content}>
                {users.map((person, personIndex) => {
                    const { id, name, photo, text } = person;
                    let position = 'Reviews__slide_next';
                    if (personIndex === currentIndex) {
                        position = 'Reviews__slide_active';
                    }

                    if (
                        personIndex === currentIndex - 1 ||
                        (currentIndex === 0 &&
                            personIndex === clients.length - 1)
                    ) {
                        position = 'Reviews__slide_last';
                    }

                    return (
                        <article className={position} key={id}>
                            <img
                                className={classes.Reviews__photo}
                                src={photo}
                                alt={`Фото клиента с именем ${name}.`}
                                width={170}
                            />
                            <h4 className={classes.Reviews__name}>{name}</h4>
                            <p className={classes.Reviews__text}>{text}</p>
                        </article>
                    );
                })}
            </div>
            <div className={classes.Rewiews__btns}>
                <button
                    className={`${classes.Reviews__btn} ${classes.Reviews__btn_prev}`}
                    onClick={() =>
                        setCurrentIndex((prevState) => prevState - 1)
                    }
                >
                    <img
                        className={classes.Reviews__arrow}
                        src={prev}
                        alt="Стрелка слайдера предыдущий слайд."
                        width={20}
                    />
                </button>
                <button
                    className={`${classes.Reviews__btn} ${classes.Reviews__btn_next}`}
                    onClick={() =>
                        setCurrentIndex((prevState) => prevState + 1)
                    }
                >
                    <img
                        className={classes.Reviews__arrow}
                        src={next}
                        alt="Стрелка слайдера следующий слайд."
                        width={20}
                    />
                </button>
            </div>
        </section>
    );
}

export default Reviews;
