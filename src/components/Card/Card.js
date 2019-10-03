/* eslint-disable import/no-dynamic-require */
import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({ title, url, image = '' }) => {
  const play = () => {
    if (!url) {
      return;
    }
    import(`../../assets/animals/${url}`).then(sound => {
      const audio = new Audio(sound.default);
      const audioPromise = audio.play();
      if (audioPromise !== undefined) {
        audioPromise
          .catch(error => {
            // Auto-play was prevented
            // Show a UI element to let the user manually start playback
          })
          .then(() => {
            // Auto-play started
          });
      }
      audio.onended = () => {};
    });
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
