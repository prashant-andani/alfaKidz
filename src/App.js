import React from 'react';
import './App.scss';
import cx from 'classnames';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

import Routes from './Routes';

const hours = new Date().getHours();
const isDayTime = hours > 6 && hours < 18;
const classNames = cx('App', { day: isDayTime, night: !isDayTime });

function App() {
  return (
    <BrowserRouter>
      <div className={classNames}>
        {isDayTime}
        <div className="header-container">
          <Header />
        </div>
        <div className="main-container">
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
