import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('../dashboard')),
  },
  {
    path: 'blankPage',
    component: asyncComponent(() => import('../blankPage')),
  },
  {
    path: 'authCheck',
    component: asyncComponent(() => import('../AuthCheck')),
  },
  {
    path: 'cancel-requests',
    component: asyncComponent(() => import('../CancelRequestsList')),
  },
  {
    path: 'orders',
    component: asyncComponent(() => import('../OrdersView')),
  },
  {
    path: 'order/:id',
    component: asyncComponent(() => import('../Order/Single')),
  },
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact !== false}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;
