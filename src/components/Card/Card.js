import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
const Card = ({ title, url, image }) => {
  const play = () => {
    import(`../../assets/animals/${url}`).then(sound => {
      console.log(sound);
      const audio = new Audio(sound.default);
      audio.play();
    });
  };

  const getImgUrl = () =>
    import(`../../assets/images/${image}`).then(image => image.default);

  return (
    <div className="card" onClick={play}>
      <div>
        <img src={require(`../../assets/images/${image}`)} alt={title} />
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
