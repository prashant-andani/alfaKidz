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
            console.log(error);
            // Auto-play was prevented
            // Show a UI element to let the user manually start playback
          })
          .then(() => {
            // Auto-play started
          });
      }
      audio.onended = () => {
        console.log('ended audio');
      };
    });
  };

  return (
    <div className="card hvr-icon-grow" onClick={play}>
      <div>
        <img
          className="hvr-icon"
          src={require(`../../assets/images/${image}`)}
          alt={title}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

Card.defaultProps = {};

export default Card;
