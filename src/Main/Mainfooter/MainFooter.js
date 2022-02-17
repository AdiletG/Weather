import React,{useState,useEffect} from 'react';
import styles from './MainFooter.module.css'
const MainFooter = ({fiveDays, date, setDate, isLight}) => {

    const  {title, listDate, itemDate, row, card, cardTitle, cardTempMax, cardTempMin, description, itemDateActive, light} = styles;



    return (
        <>
                <h2 className={title}>на 5 дней</h2>
                <ul className={`${listDate} `}>

                    {
                        [...new Set(
                            fiveDays.map((elem) => elem.dt_txt.slice(0,10))
                        )].map((elem) => (
                            <li key={elem}
                                className={`${itemDate}  ${isLight ? styles.light : ''} ${date === elem ? itemDateActive : ''}`}
                                onClick={() => setDate(elem)}
                            >{elem}
                            </li>
                        ))
                    }
                </ul>


                <div className={`${row}  ${card.length > row.length ? styles.wrap : styles.row} ${isLight ? styles.light : ''}`}>
                    {
                       (fiveDays.filter((item) => item.dt_txt.includes(date)))
                           .map((item)=>(
                                <div key={item.dt_txt} className={`${card} ${isLight ? styles.cardLight : ''}`}>
                                    <h3 className={cardTitle}>{item.dt_txt.slice(11,16)}</h3>
                                    <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt="Weather ICon" />
                                    <p className={cardTempMax}>{(item.main.temp_max - 273.15).toFixed()}°C</p>
                                    <p className={cardTempMin}>{(item.main.temp_min - 273.15).toFixed()}°C</p>
                                    <p className={description}>{item.weather[0].description}</p>
                                </div>
                        ))
                    }
                </div>
        </>
    );
};

export default MainFooter;