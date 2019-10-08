import React from 'react';
import PropTypes from 'prop-types';
import './LearningCard.scss';

const LearningCard = ({ title, image }) => {
  const imgUrl = `${image}?tr=w-200,h-200`;
  return (
    <section className="learning-card">
      <span className="title">{title}</span>
      <div>
        <img loading="lazy" src={imgUrl} className="img" alt={title} />
      </div>
    </section>
  );
};

LearningCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

LearningCard.defaultProps = {};

export default LearningCard;
