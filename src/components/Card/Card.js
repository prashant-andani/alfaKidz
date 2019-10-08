/* eslint-disable import/no-dynamic-require */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './Card.scss';

const Card = ({ title, url, image = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // eslint-disable-next-line global-require
  const imageSrc = require(`../../assets/images/${image}`);
  const classNames = cx('hvr-icon', { heartBeat: isPlaying });
  let audio = null;

  if (!audio && url) {
    import(`../../assets/animals/${url}`).then(sound => {
      audio = new Audio(sound.default);
      audio.onended = () => {
        setIsPlaying(false);
      };
    });
  }
  const play = () => {
    setIsPlaying(true);
    audio.play();
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="card hvr-icon-grow" onClick={play}>
      <div>
        <img id={title} loading="lazy" className={classNames} src={imageSrc} alt={title} />
      </div>
      <div className="title">{title}</div>
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
