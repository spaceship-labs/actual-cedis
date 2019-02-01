import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
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
            pathname: '/login',
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
        path="/login"
        component={asyncComponent(() => import('./containers/Login'))}
      />

      <Route
        exact
        path="/"
        render={() => {
          if (isLoggedIn) return <Redirect to="dashboard/orders" />;
          return <Redirect to="login" />;
        }}
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
