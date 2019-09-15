import React from 'react';
import './App.css';
import Header from './components/Header/Header';

import Card from './components/Card/Card';
function App() {
  const alphabets = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  const animals = [
    {
      name: 'Cat',
      url: 'cat.wav',
      image: 'cat.svg'
    },
    {
      name: 'Cow',
      url: 'cow.wav',
      image: 'cow.svg'
    },
    {
      name: 'Dog',
      url: 'dog.wav',
      image: 'dog.svg'
    },
    {
      name: 'Elephant',
      url: 'elephant.wav',
      image: 'elephant.svg'
    },
    {
      name: 'Hen',
      url: 'hen.wav',
      image: 'hen.svg'
    },
    {
      name: 'Horse',
      url: 'horse.wav',
      image: 'horse.svg'
    },
    {
      name: 'Jaguar',
      url: 'jaguar.wav',
      image: 'tiger.svg'
    },
    {
      name: 'Monkey',
      url: 'monkey.wav',
      image: 'monkey.svg'
    },
    {
      name: 'Pig',
      url: 'pig.wav',
      image: 'pig.svg'
    },
    {
      name: 'Zebra',
      url: 'zebra.wav',
      image: 'zebra.svg'
    }
  ];
  const renderCards = () =>
    animals.map((animal, i) => (
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
