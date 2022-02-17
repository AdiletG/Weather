import React from 'react';
import styles from './MainHeader.module.css'
import Thermometer from '../../Assets/Icons/Thermometer.svg'
import MiniDrop from '../../Assets/Icons/Humidity.svg'
import Evaporator from '../../Assets/Icons/Evaporator.svg'
import Wind from '../../Assets/Icons/Wind.svg'

const MainHeader = ({current, isLight}) => {

    const addZero = (num) => {
        if (num < 10) return `0${num}`;
        else return num
    };
    const cityTime = () => {
        let d = new Date(),
            utc = d.getTime() + (d.getTimezoneOffset() * 60000),
            nd = new Date(utc + (1000 * current.timezone)),
            hours = addZero(nd.getHours()),
            minutes = addZero(nd.getMinutes());
        return `${hours} : ${minutes}`
    };

    console.log(cityTime());


    return (
        <div className={styles.row}>

            <div className={`${styles.left} ${isLight ? styles.light : '' }`}>
                <div className={styles.leftTop}>
                    <div className={styles.leftTopLeft}>
                        <p className={styles.deg}>{(current.main.temp - 273.15).toFixed()}°</p>
                        <p className={styles.today}>Today</p>
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`} alt="Weather ICon" className={styles.icon}/>
                </div>
                <p className={styles.infoText}>Time  : {cityTime()}</p>
                <p className={styles.infoText}>City  : {current.name}</p>
            </div>


                <div className={`${styles.right} ${isLight ? styles.light : '' }`}>
                    <div className={styles.block}>
                        <div className={styles.width}>
                            <div className={styles.circle}>
                                <img src={Thermometer} alt="Thermometer"/>
                            </div>
                            <p className={styles.descr}>Temperature</p>
                        </div>
                        <p className={styles.text}>{(current.main.temp - 273.15).toFixed()} ° - feels
                            like  {(current.main.feels_like - 273.15).toFixed()} °</p>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.width}>
                            <div className={styles.circle}>
                                <img src={MiniDrop} alt="MiniDrop"/>
                            </div>
                            <p className={styles.descr}>Pressure</p>
                        </div>
                        <p className={styles.text}>{current.main.pressure} mmHg - normal</p>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.width}>
                            <div className={styles.circle}>
                                <img src={Evaporator} alt="Desc"/>
                            </div>
                            <p className={styles.descr}>Precipitation</p>
                        </div>
                        <p className={styles.text}>{current.weather[0].description}</p>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.width}>
                            <div className={styles.circle}>
                                <img src={Wind} alt="Wind"/>
                            </div>
                            <p className={styles.descr}>Wind</p>
                        </div>
                        <p className={styles.text}>{(current.wind.speed)} m/c</p>
                    </div>
                </div>
        </div>

    );
};

export default MainHeader;