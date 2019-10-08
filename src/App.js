import React from 'react';
import './App.scss';
import cx from 'classnames';
import Header from './components/Header/Header';

import Routes from './Routes';

const hours = new Date().getHours();
const isDayTime = hours > 6 && hours < 18;
const classNames = cx('App', { day: isDayTime, night: !isDayTime });

function App() {
  return (
    <div className={classNames}>
      {isDayTime}
      <Header />
      <div className="main-container">
        <Routes />
      </div>
    </div>
  );
}

export default App;
