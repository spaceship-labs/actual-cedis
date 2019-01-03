import React, { Component } from 'react';
import SolicitudBar from './SolicitudBar';
import OrderText from './OrderText';
import LayoutContentWrapper from '../utility/layoutWrapper';
import LayoutContent from '../utility/layoutContent';

/* eslint-disable*/
class CancelRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {},
      showConfirmDialog: false,
      requestAnswer: 'partially',
    };
  }

  setDialogVisibility = (e, val) => {
    this.setState({ showConfirmDialog: val });
  };

  setRequestStatus = val => {
    this.setState({ requestStatus: val });
  };

  showConfirmDialog = () => {
    this.setState({ showConfirmDialog: true });
  };

  hideConfirmDialog = () => {
    this.setState({ showConfirmDialog: false });
  };

  allButton = (e, val) => {
    this.setRequestStatus(val);
    this.showConfirmDialog();
  };

  render() {
    const { cancelRequest: request, products } = this.props;
    const {
      Order: { folio },
    } = request;
    if (!request) return null;
    return (
      <LayoutContentWrapper style={{ height: 'auto' }}>
        <LayoutContent>
          <SolicitudBar folio={folio} buttonsCb={this.allButton} />
          <OrderText>{request.reason}</OrderText>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

export default CancelRequest;
