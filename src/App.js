import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import { animals } from './constants';
import cx from 'classnames';
import HeaderActions from './components/HeaderActions/HeaderActions';
function App() {
  const [data, setData] = useState(animals);
  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 18;
  const classNames = cx('App', { day: isDayTime, night: !isDayTime });
  const renderCards = () =>
    data.map((animal, i) => (
      <Card
        key={i}
        title={animal.name}
        url={animal.url}
        image={animal.image}
      ></Card>
    ));

  return (
    <div className={classNames}>
      <Header></Header>
      <HeaderActions></HeaderActions>
      {isDayTime}
      <section className="cards">{renderCards()} </section>
    </div>
  );
}

export default App;
