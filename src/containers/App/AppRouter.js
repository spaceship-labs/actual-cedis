import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
  {
    path: '',
    exact: true,
    render: ({ ...props }) => {
      const {
        match: { url },
      } = props;
      if (url === '/dashboard/') return <Redirect to="orders" />;
      return <Redirect to="dashboard/orders" />;
    },
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
  {
    path: 'cancel-request-old/:id',
    component: asyncComponent(() =>
      import('../CancelRequest/old/CancelRequest')
    ),
  },
  {
    path: 'cancel-request/:id',
    component: asyncComponent(() => import('../CancelRequest')),
  },
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, ...otherProps } = singleRoute;
          return (
            <Route
              exact
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
