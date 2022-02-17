import React from 'react';
import MainHeader from "./MainHeader/MainHeader";
import MainFooter from "./Mainfooter/MainFooter";

const Main = ({current, fiveDays, date, setDate, isLight}) => {
    return (
        <main style={{paddingBottom: 50+'px'}}>
          <div className="container">
                      <MainHeader current={current} isLight={isLight}/>
                      <MainFooter fiveDays={fiveDays} date={date} setDate={setDate} isLight={isLight}/>
          </div>
        </main>
    );
};

export default Main;