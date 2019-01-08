import React, { Component } from 'react';
import clone from 'clone';
import { antiBind } from '../../helpers/utils';
import SolicitudBar from './SolicitudBar/SolicitudBar';
import OrderText from './OrderText/OrderText';
import LayoutContentWrapper from '../utility/layoutWrapper';
import LayoutContent from '../utility/layoutContent';
import HeaderRow from './TestMain/HeaderRow';
import ArticleRow from './TestMain/ArticleRow';
import CambiosBar from './CambiosBar/CambiosBar';
import TestRequestConfirmAprove from './TestMain/TestRequestConfirm/TestRequestConfirmAprove';

class CancelRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {},
      showDialog: false,
      renderReady: false,
      requestStatus: 'partially',
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { cancelRequest: request, products } = props;
    const { renderReady } = state;
    if (renderReady) return null;
    if (request.id && Object.keys(products).length > 0) {
      return { renderReady: true };
    }

    return null;
  }

  setDialogVisibility = (e, val) => {
    this.setState({ showDialog: val });
  };

  setRequestStatus = val => {
    this.setState({ requestStatus: val });
  };

  showConfirmDialog = () => {
    this.setState({ showDialog: true });
  };

  hideConfirmDialog = () => {
    this.setState({ showDialog: false });
  };

  allButton = (e, val) => {
    this.setRequestStatus(val);
    this.showConfirmDialog();
  };

  restartRequestModal = () => {
    this.setRequestStatus('partially');
    this.hideConfirmDialog();
  };

  answerRequest = (e, id, answer) => {
    const { answers } = this.state;
    this.setState({
      answers: { ...answers, [id]: answer ? 'authorized' : 'rejected' },
      requestStatus: 'partially',
    });
  };

  unsetAnswer = (e, id) => {
    const { answers } = this.state;
    const cloned = clone(answers);
    if (cloned[id]) {
      delete cloned[id];
    }
    this.setState({ answers: { ...cloned } });
  };

  renderArticle = cancelDetail => {
    const {
      cancelRequest: { Details: details, status },
      products,
    } = this.props;
    const { answers } = this.state;
    const { id, Detail } = cancelDetail;
    const detail = details[Detail];
    const product = products[detail.Product];
    return (
      <ArticleRow
        key={id}
        product={product}
        detail={detail}
        cancelDetail={cancelDetail}
        options={!!answers[id]}
        accept={antiBind(this.answerRequest, id, true)}
        reject={antiBind(this.answerRequest, id, false)}
        unSet={antiBind(this.unsetAnswer, id)}
        requestStatus={status}
      />
    );
  };

  sendUpdate = () => {
    const { answers, requestStatus } = this.state;
    const {
      updateCancel,
      cancelRequest: { id },
    } = this.props;
    updateCancel({ id, answers, requestStatus });
    this.hideConfirmDialog();
  };

  render() {
    const { renderReady } = this.state;
    if (!renderReady) return null;
    const { cancelRequest: request } = this.props;
    const {
      CancelationDetails: cancelDetails,
      Order: { folio },
      status,
    } = request;
    const { showDialog } = this.state;
    return (
      <LayoutContentWrapper style={{ height: 'auto' }}>
        <LayoutContent>
          <SolicitudBar
            folio={folio}
            buttonsCb={this.allButton}
            status={status}
          />
          <OrderText>{request.reason}</OrderText>
          <HeaderRow />
          {cancelDetails.map(this.renderArticle)}
          <CambiosBar buttonCb={this.showConfirmDialog} />
          <TestRequestConfirmAprove
            show={showDialog}
            acceptCb={this.sendUpdate}
            cancelCb={this.restartRequestModal}
          />
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

export default CancelRequest;
