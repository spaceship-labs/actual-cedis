import React from 'react';
import { connect } from 'react-redux';
import authAction from '../../redux/auth/actions';
import appActions from '../../redux/app/actions';
import '../App/global.css';
import SingleOrder from './Single';

const { logout } = authAction;
const { toggleAll } = appActions;
export const App = () => <SingleOrder />;

const mapStateToProps = state => {
  const {
    Auth: auth,
    App: { height },
  } = state;

  return { auth, height };
};

export default connect(
  mapStateToProps,
  { logout, toggleAll }
)(App);
