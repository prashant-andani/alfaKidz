import React from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const LoaderComponent = () => <div>Loading...</div>;

const AsyncEntertainment = Loadable({
  loader: () => import('./containers/entertainment'),
  loading: LoaderComponent
});

const AsyncLearning = Loadable({
  loader: () => import('./containers/learning'),
  loading: LoaderComponent
});

const Routes = ({ childProps }) => {
  const props = {
    ...childProps
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/entertainment" exact component={AsyncEntertainment} props={props} />
        <Route path="/learning/:category?" exact component={AsyncLearning} props={props} />

        {/* Finally, catch all unmatched routes */}
        <Redirect to="/learning/:category?" />
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
