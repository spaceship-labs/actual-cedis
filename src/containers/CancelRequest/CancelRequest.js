import React, { Component } from 'react';
import { connect } from 'react-redux';
import dispatcher from './dispatcher';
import { containerSelector } from './selectors';
import CancelContent from '../../components/CancelRequest/CancelContent';

class CancelRequest extends Component {
  componentDidMount() {
    // Logic to ask for the cancel request.
    const {
      getCancel,
      match: {
        params: { id },
      },
    } = this.props;
    getCancel(id);
  }

  render() {
    const { loadingCancel } = this.props;
    // console.log('object', this.props);
    if (loadingCancel) return <div>loading</div>;
    return (
      <div>
        <CancelContent {...this.props} />
        <br />
      </div>
    );
  }
}

export default connect(
  containerSelector,
  dispatcher
)(CancelRequest);
