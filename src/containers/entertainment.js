import React from 'react';
import HeaderActions from '../components/HeaderActions/HeaderActions';
import Card from '../components/Card/Card';
import { animalsWithSound } from '../constants';
import './entertainment.scss';

const Entertainment = () => {
  const renderCards = () =>
    animalsWithSound.map((animal, i) => (
      <Card key={i} title={animal.name} url={animal.url} image={animal.image} />
    ));

  return (
    <>
      <HeaderActions />
      <section className="cards">{renderCards()} </section>
    </>
  );
};

Entertainment.propTypes = {};

Entertainment.defaultProps = {};

export default Entertainment;
