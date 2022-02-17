import React from 'react';
import styles from "../../Header/Header.module.css";
import axios from "axios";

const Form = ({setCurrent, setFiveDays, setDate, isLight}) => {


    const getWeatherUseCityName = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=130332a44469c296a28a1bc0fd5e3029`)
            .then(({data}) => setCurrent(data))
            .catch(() => alert('Alas, there is no such city, try again!'));

        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${e.target[0].value}&appid=130332a44469c296a28a1bc0fd5e3029`)
            .then(({data}) => {
                setFiveDays(data.list);
                setDate(data.list[0].dt_txt.slice(0,10))})
            .catch(() => alert('Alas, there is no such city, try again!'));

        e.target[0].value = ''
    };


    return (
        <form className={styles.form} onSubmit={getWeatherUseCityName}>
            <input type="search" className={`${styles.input} ${isLight ? styles.light: ''}`} placeholder='Write city...' required/>
            <button type='submit' className={`${styles.button} ${isLight ? styles.light: ''}`}>Search</button>
        </form>
    );
};

export default Form;