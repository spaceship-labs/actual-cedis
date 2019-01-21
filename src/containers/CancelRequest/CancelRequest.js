import React, { Component } from 'react';
import { connect } from 'react-redux';
import dispatcher from './dispatcher';
import selectors from './selectors';
import CancelContent from '../../components/CancelRequest/CancelContent';

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
    const { cancelRequest: request } = this.props;
    const {
      cancelRequest: { id },
    } = this.props;

    return id ? (
      <div>
        <CancelContent {...this.props} />
        <br />
        {request.id}
      </div>
    ) : null;
  }
}

const { containerSelector } = selectors;

export default connect(
  containerSelector,
  dispatcher
)(CancelRequest);
