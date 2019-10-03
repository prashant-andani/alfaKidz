import React from 'react';
import PropTypes from 'prop-types';

const HeaderActions = ({ actions, onAction }) =>
  actions.map(action => (
    <div
      role="button"
      onClick={() => {
        onAction(action.name);
      }}
    >
      {action.label}
    </div>
  ));

HeaderActions.propTypes = {
  actions: PropTypes.array,
  onAction: PropTypes.func.isRequired
};

HeaderActions.defaultProps = {
  actions: []
};

export default HeaderActions;
