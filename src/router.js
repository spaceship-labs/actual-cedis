import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import App from './containers/App/App'; // eslint-disable-line
import asyncComponent from './helpers/AsyncFunc';
import { isAuthenticated } from './services/auth';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
const PublicRoutes = ({ history, isLoggedIn }) => (
  <ConnectedRouter history={history}>
    <div>
      <Route
        exact
        path="/"
        component={asyncComponent(() => import('./containers/Login'))}
      />
      <Route
        exact
        path="/OrderSingle"
        component={asyncComponent(() => import('./containers/Order/index'))}
      />
      <Route
        exact
        path="/requestList"
        component={asyncComponent(() =>
          import('./containers/CancelRequest/old/CancelRequest')
        )}
      />
      <RestrictedRoute
        path="/dashboard"
        component={App}
        isLoggedIn={isLoggedIn}
      />
    </div>
  </ConnectedRouter>
);
export default connect(() => ({
  isLoggedIn: isAuthenticated(),
}))(PublicRoutes);
