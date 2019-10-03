/* eslint-disable import/no-dynamic-require */
import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ title, url, image = '' }) => {
  let audio = null;
  if (!audio) {
    import(`../../assets/animals/${url}`).then(sound => {
      audio = new Audio(sound.default);
      audio.onended = () => {};
    });
  }
  const play = () => {
    audio.play();
  };
  // eslint-disable-next-line global-require
  const imageSrc = require(`../../assets/images/${image}`);
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="card hvr-icon-grow" onClick={play}>
      <div>
        <img className="hvr-icon" src={imageSrc} alt={title} />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string
};

Card.defaultProps = {
  image: ''
};

export default Card;
