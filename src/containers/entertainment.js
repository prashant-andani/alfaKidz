import React from 'react';
import HeaderActions from '../components/HeaderActions/HeaderActions';
import Card from '../components/Card/Card';
import { animals } from '../constants';

const Entertainment = () => {
  const renderCards = () =>
    animals.map((animal, i) => (
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