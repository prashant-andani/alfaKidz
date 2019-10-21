import React from 'react';
import PropTypes from 'prop-types';
import './LearningCard.scss';
import { synthesisPrefixes } from '../../constants/index';

const LearningCard = ({ title, image }) => {
  const imgUrl = `${image}?tr=w-200,h-200`;
  const msg = new SpeechSynthesisUtterance();

  const speak = () => {
    speechSynthesis.getVoices().forEach(voice => {
      if (voice.name === 'Samantha') {
        msg.voice = voice;
      }
    });
    const prefix = synthesisPrefixes[Math.floor(Math.random() * synthesisPrefixes.length)];
    msg.text = `${prefix}${title}`;

    window && window.speechSynthesis.speak(msg);
  };
  return (
    <div className="learning-card" role="button" onClick={speak}>
      <span className="title">{title}</span>
      <div>
        <img loading="lazy" src={imgUrl} className="img" alt={title} />
      </div>
    </div>
  );
};

LearningCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

LearningCard.defaultProps = {};

export default LearningCard;
