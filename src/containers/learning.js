import React from 'react';
import PropTypes from 'prop-types';
import LearningCard from '../components/LearningCard/LearningCard';
import './learning.scss';
import { animals, countries, vegetables, fruits } from '../constants/index';

const Learning = ({ match }) => {
  let list = [];
  switch (match.params.category) {
    case 'animals':
      list = animals;
      break;
    case 'vegetables':
      list = vegetables;
      break;
    case 'fruits':
      list = fruits;
      break;
    case 'countries':
      list = countries;
      break;
    default:
      list = animals;
      break;
  }
  const renderCards = data =>
    data.map((animal, i) => <LearningCard key={i} title={animal.name} image={animal.image} />);
  return <div className="card-container">{renderCards(list)}</div>;
};

Learning.propTypes = {
  match: PropTypes.object.isRequired
};

Learning.defaultProps = {};

export default Learning;
