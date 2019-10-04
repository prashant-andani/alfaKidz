import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ label, onClick, disabled, ...rest }) => {
  return (
    <button className="btn btn-inverse" onClick={onClick} {...rest}>
      {rest.children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool
};
Button.defaultProps = {
  label: '',
  disabled: false,
  onClick: () => {}
};

export default Button;
