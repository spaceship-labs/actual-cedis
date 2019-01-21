import React, { Component } from 'react';
import SolicitudBar from './SolicitudBar/SolicitudBar';
import OrderText from './OrderText/OrderText';
import LayoutContentWrapper from '../utility/layoutWrapper';
import LayoutContent from '../utility/layoutContent';
import CambiosBar from './CambiosBar/CambiosBar';
import Confirm from './PopUp/Confirm';
import TestMain from './TestMain/TestMain';

// const antiBind = (fn, ...args) => e => fn(e, ...args);

class CancelContent extends Component {
  constructor(props) {
    super(props);
    this.ToogleDialog = this.ToogleDialog.bind(this);
    this.state = {
      showDialog: false,
    };
  }

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
    console.log(val);
    this.ToogleDialog(true);
  };

  Cancel = () => {
    this.ToogleDialog(false);
  };

  renderArticle = cancelDetail => {
    const {
      cancelRequest: { Details: details, status },
      products,
    } = this.props;
    const { id, Detail } = cancelDetail;
    const detail = details[Detail];
    const product = products[detail.Product];
    return (
      <TestMain
        key={id}
        product={product}
        detail={detail}
        cancelDetail={cancelDetail}
        requestStatus={status}
      />
    );
  };

  render() {
    const { cancelRequest: request } = this.props;
    const { CancelationDetails: cancelDetails } = request;
    const { showDialog } = this.state;
    return (
      <LayoutContentWrapper style={{ height: 'auto' }}>
        <LayoutContent>
          <SolicitudBar
            folio={request.Order.folio}
            buttons={this.allButton}
            status={request.status}
          />
          <OrderText text={request.reason} />
          <br />
          {cancelDetails.map(this.renderArticle)}
          <CambiosBar Toogle={() => this.ToogleDialog(true)} />
          <Confirm
            show={showDialog}
            cancel={this.Cancel}
            folio={request.Order.folio}
          />
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

export default CancelContent;
