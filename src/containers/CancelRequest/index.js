import React, { Component } from 'react';
import { connect } from 'react-redux';
import dispatcher from './dispatcher';
import selectors from './selectors';
import CancelRequestView from '../../components/CancelRequest';

class CancelRequest extends Component {
  componentDidMount() {
    // Logic to ask for the cancel request.
    const {
      getCancelRequest,
      match: {
        params: { id },
      },
    } = this.props;
    getCancelRequest(id);
  }

  componentDidCatch(err) {
    console.log('Cached Error: ', err);
  }

  render() {
    const {
      cancelRequest: { id },
    } = this.props;

    return id ? <CancelRequestView {...this.props} /> : null;
  }
}

const { containerSelector } = selectors;

export default connect(
  containerSelector,
  dispatcher
)(CancelRequest);
