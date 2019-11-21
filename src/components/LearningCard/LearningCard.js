import React from 'react';
import PropTypes from 'prop-types';
import './LearningCard.scss';
import cx from 'classnames';
import { synthesisPrefix } from '../../constants/index';

const LearningCard = ({ title, image, fadeInClass, onSwipe }) => {
  const containerClass = cx('learning-card', fadeInClass);
  const imgUrl = `${image}?tr=w-200,h-200`;
  const msg = new SpeechSynthesisUtterance();
  const myRef = React.createRef();

  const speak = () => {
    speechSynthesis.getVoices().forEach(voice => {
      if (voice.name === 'Samantha') {
        msg.voice = voice;
      }
    });
    const prefix = synthesisPrefix;
    msg.text = `${prefix}${title}`;

    window && window.speechSynthesis.speak(msg);
  };

  // Touchstart, Touchend are only for mobiles or tables
  let touchstartX = 0;
  let touchendX = 0;
  const onTouchStart = event => {
    touchstartX = event.changedTouches[0].screenX;
  };
  const onTouchEnd = event => {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
  };
  const handleGesture = () => {
    // After minimum of 100px swipe, triggers
    // swipe left
    if (touchendX < touchstartX - 100) {
      onSwipe(true);
    }
    // swipe right
    if (touchendX > touchstartX + 100) {
      onSwipe(false);
    }
  };

  return (
    <div
      className={containerClass}
      role="button"
      ref={myRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onClick={speak}
    >
      <span className="title">{title}</span>
      <div>
        <img loading="lazy" src={imgUrl} className="img" alt={title} />
      </div>
    </div>
  );
};

LearningCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  fadeInClass: PropTypes.string,
  onSwipe: PropTypes.func.isRequired
};

LearningCard.defaultProps = {
  fadeInClass: ''
};

export default LearningCard;
