import React, { Component } from 'react';
import clone from 'clone';
import SolicitudBar from './SolicitudBar/SolicitudBar';
import OrderText from './OrderText/OrderText';
import LayoutContentWrapper from '../utility/layoutWrapper';
import LayoutContent from '../utility/layoutContent';
import CambiosBar from './CambiosBar/CambiosBar';
import Confirm from './PopUp/Confirm';
import TestMain from './TestMain/TestMain';

const antiBind = (fn, ...args) => e => fn(e, ...args);

class CancelContent extends Component {
  constructor(props) {
    super(props);
    this.ToogleDialog = this.ToogleDialog.bind(this);
    this.state = {
      detailApprovement: [],
      showDialog: false,
      requestStatus: 'partially',
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   const { cancelRequest: request, products } = props;
  //   const { renderReady } = state;
  //   if (renderReady) return null;
  //   if (request.id && Object.keys(products).length > 0) {
  //     return { renderReady: true };
  //   }

  //   return null;
  // }

  setRequestStatus = val => {
    this.setState({ requestStatus: val, detailApprovement: [] });
  };

  answerRequest = (e, id, answer) => {
    const { detailApprovement } = this.state;
    this.setState({
      detailApprovement: {
        ...detailApprovement,
        [id]: answer ? 'authorized' : 'rejected',
      },
      requestStatus: 'partially',
    });
  };

  unsetAnswer = (e, id) => {
    const { detailApprovement } = this.state;
    const cloned = clone(detailApprovement);
    if (cloned[id]) {
      delete cloned[id];
    }
    this.setState({ detailApprovement: { ...cloned } });
  };

  ToogleDialog = e => {
    if (e === true) {
      this.setState({
        showDialog: e,
      });
    } else {
      this.setState({
        showDialog: e,
      });
    }
  };

  allButton = val => {
    this.setRequestStatus(val);
    this.ToogleDialog(true);
  };

  Cancel = () => {
    this.setRequestStatus('partially');
    this.ToogleDialog(false);
  };

  Update = () => {
    const { detailApprovement, requestStatus } = this.state;
    const {
      cancelRequest: { id },
    } = this.props;
    console.log(
      'id, requestStatus, detailApprovement',
      id,
      requestStatus,
      detailApprovement
    );
    // const {
    //   updateCancel,
    //   cancelRequest: { id },
    // } = this.props;
    // updateCancel({ id, detailApprovement, requestStatus });
    this.ToogleDialog(false);
    console.log('Se han enviado tus datos');
  };

  renderArticle = cancelDetail => {
    const {
      cancelRequest: { Details: details, status },

      products,
    } = this.props;
    const { detailApprovement } = this.state;
    const { id, Detail } = cancelDetail;
    const detail = details[Detail];
    const product = products[detail.Product];
    // console.log('detail', detail);
    // console.log('array', !detailApprovement[id]);
    return (
      <TestMain
        key={id}
        product={product}
        detail={detail}
        answer={detailApprovement[id]}
        options={!detailApprovement[id]}
        accept={antiBind(this.answerRequest, id, true)}
        reject={antiBind(this.answerRequest, id, false)}
        unSet={antiBind(this.unsetAnswer, id)}
        requestStatus={status}
      />
    );
  };

  render() {
    const { cancelRequest } = this.props;

    const {
      Order,
      Details,
      CancelationDetails,
      status,
      reason,
    } = cancelRequest;
    // const { CancelationDetails: cancelDetails } = request;
    const { showDialog, detailApprovement } = this.state;
    // console.log('Details', Details);
    // console.log('CancelationDetails', CancelationDetails);
    // console.log('detailApprovement', detailApprovement);

    if (Details === undefined) return <div>loading 2</div>;
    return (
      <LayoutContentWrapper style={{ height: 'auto' }}>
        <LayoutContent>
          <SolicitudBar
            folio={Order.folio}
            buttons={this.allButton}
            status={status}
          />
          <OrderText text={reason} />
          <br />
          {/* {Object.keys(CancelationDetails).map(key => this.renderArticle(key))} */}
          {CancelationDetails.map(this.renderArticle)}
          {console.log('detailAprovement', detailApprovement)}
          <CambiosBar status={status} Toogle={() => this.ToogleDialog(true)} />
          <Confirm
            show={showDialog}
            accept={this.Update}
            cancel={this.Cancel}
            folio={Order.folio}
          />
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

export default CancelContent;
