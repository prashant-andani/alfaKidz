import React from 'react';
import HeaderActions from '../components/HeaderActions/HeaderActions';
import Card from '../components/Card/Card';
import { animalsWithSound } from '../constants/index';
import './entertainment.scss';

const Entertainment = () => {
  const renderCards = () =>
    animalsWithSound.map((animal, i) => {
      const { name, url, image } = animal;
      return <Card key={i} title={name} url={url} image={image} />;
    });

  return (
    <>
      <HeaderActions />
      <section className="cards"> {renderCards()} </section>{' '}
    </>
  );
};

Entertainment.propTypes = {};

Entertainment.defaultProps = {};

export default Entertainment;
