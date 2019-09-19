import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import { animals } from './constants';

function App() {
  const [data, setData] = useState(animals);
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
    <div className="">
      <Header></Header>
      <section className="cards">{renderCards()} </section>
    </div>
  );
}

export default App;
