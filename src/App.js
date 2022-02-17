import React,{useEffect,useState} from 'react'
import './style.css'
import './Assets/Fonts/Montserrat/stylesheet.css'
import Header from "./Header/Header";
import Main from "./Main/Main";
import axios from 'axios'
import Form from "./Camponents/Form/Form";



function App() {


    const [current, setCurrent] = useState({});

    const [fiveDays, setFiveDays] = useState([]);

    const [date, setDate] = useState('');

    const [isLight, setIsLight] = useState(false);


    function getLocation() {
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }else{
            console.log('Geolocation is not supported by this browser.')
        }
    }

    function showPosition(position){
        axios(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=130332a44469c296a28a1bc0fd5e3029`)
            .then(({data}) => setCurrent(data));
        axios(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=130332a44469c296a28a1bc0fd5e3029`)
            .then(({data})=> {
                setFiveDays(data.list);
                setDate(data.list[0].dt_txt.slice(0,10))
            });
    }

    useEffect(() =>{
        getLocation()
    },[]);


  return (
    <div className={`app ${isLight ? 'light' : ''}`}>
        {
            JSON.stringify(current) !== '{}'?<>
            <Header setCurrent={setCurrent} setFiveDays={setFiveDays} setDate={setDate} isLight={isLight} setIsLight={setIsLight}/>
            <Main current={current} fiveDays={fiveDays} date={date} setDate={setDate} isLight={isLight}/>
            </>:
                <div className='form-box'>
                    <div className="form-card">
                        <h2 className='text'>You have not turned on geolocation, <br/> please turn it on or <br/> write your city...</h2>
                        <Form setDate={setDate} setCurrent={setCurrent} setFiveDays={setFiveDays} isLight={isLight} />
                    </div>
                </div>

        }

    </div>
  );
}

export default App;
