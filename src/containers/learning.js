import React from 'react';
import PropTypes from 'prop-types';

const Learning = ({ match }) => {
  return <div>{match.params.category}</div>;
};

Learning.propTypes = {
  match: PropTypes.object.isRequired
};

Learning.defaultProps = {};

export default Learning;
