import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import authAction from '../../redux/auth/actions';
import appActions from '../../redux/app/actions';
import '../App/global.css';
import SingleOrder from './Single';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
const { logout } = authAction;
const { toggleAll } = appActions;
export class App extends Component {
  render() {
    const { url } = this.props.match;
    const { height } = this.props;
    const appHeight = window.innerHeight;
    return (
      <LayoutContentWrapper style={{ height: 'auto' }}>
        <LayoutContent>
          <SingleOrder />
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

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
