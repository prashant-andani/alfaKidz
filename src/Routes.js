import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import Loadable from './components/Loadable/Loadable';

const Entertainment = lazy(() => import('./containers/entertainment'));
const AsyncEntertainment = props => Loadable(<Entertainment {...props} />);

const Learning = lazy(() => import('./containers/learning'));
const AsyncLearning = props => Loadable(<Learning {...props} />);

const Routes = ({ childProps }) => {
  const props = {
    ...childProps
  };
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/entertainment" exact component={AsyncEntertainment} props={props} />
        <Route path="/learning/:category?" exact component={AsyncLearning} props={props} />

        {/* Finally, catch all unmatched routes */}
        <Redirect to="/entertainment" />
      </Switch>
    </BrowserRouter>
  );
};

Routes.propTypes = {
  childProps: PropTypes.object
};
Routes.defaultProps = {
  childProps: {}
};
export default Routes;
