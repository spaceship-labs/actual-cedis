import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Seccion,
  CancelBanner,
  Modal,
  TxtStrong,
  TxtData,
} from './single.style';

// import Title from 'antd/lib/skeleton/Avatar';
import OrderModal from '../../components/SingleOrder/modal';
import { modaldata, asesordata } from './fakeData';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import CancelActivity from '../../components/SingleOrder/cancelActivity';
import NumberOrder from '../../components/SingleOrder/numberOrder';
import ItemsPurchased from '../../components/SingleOrder/itemsPurchased';
import MotivoCancelacion from '../../components/SingleOrder/motivo';
import Paymode from '../../components/SingleOrder/paymode';
import SapDocuments from '../../components/SingleOrder/sapDocuments';
import ShippingOrder from '../../components/SingleOrder/shippingOrder';
import Advisor from '../../components/SingleOrder/advisor';
import dispatch from './dispacher';
import { containerSelector } from './selectors';
// import antiBind from './../../components/services/utils';

class OrderSingle extends Component {
  constructor(props) {
    super(props);
    this.showpopup = this.showpopup.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.stateCancel = this.stateCancel.bind(this);
    this.cancelquantity = this.cancelquantity.bind(this);
    this.cancelReason = this.cancelReason.bind(this);
    this.cancelAllOrder = this.cancelAllOrder.bind(this);
    this.verifyData = this.verifyData.bind(this);
    this.state = {
      visible: false,
      showCancel: false,
      details: [],
      cancelAll: false,
      reason: '',
      shouldRender: false,
    };
  }

  static getDerivedStateFromProps(props) {
    const { products } = props;
    if (Object.keys(products).length > 0) {
      return { shouldRender: true };
    }
    return null;
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      getOrder,
    } = this.props;
    getOrder(id);
  }

  showpopup = () => {
    this.setState({
      visible: true,
    });
  };

  cancelReason = e => {
    const {
      target: { value },
    } = e;
    this.setState({
      reason: value,
    });
  };

  cancelAllOrder = () => {
    const { cancelAll } = this.state;
    this.setState({
      cancelAll: !cancelAll,
    });
  };

  cancelquantity = (x, { props: { value, id } }) => {
    const { details } = this.state;
    this.setState(() => {
      const arr = { id, value };
      const result = details.find(({ id: Id }) => id === Id);
      if (!result) return { details: details.concat(arr) };
      result.value = value;
      return result;
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  stateCancel = () => {
    const { showCancel } = this.state;
    this.setState({
      showCancel: !showCancel,
    });
  };

  verifyData = () => {
    const { details, cancelAll, reason } = this.state;
    const {
      createCancel,
      match: {
        params: { id: orderId },
      },
    } = this.props;
    if (reason.length > 10 && (details.length > 0 || cancelAll === true)) {
      const cancelData = { orderId, cancelAll, details, reason };
      return createCancel(cancelData);
    }
    if (reason.length < 10) {
      return alert('falta complementar las razones de cancelacion');
    }
    return alert('No ha seleccionado articulos para cancelar');
  };

  render() {
    const { order, products } = this.props;
    const { folio, Broker, OrderCancelations } = order;
    const { visible, showCancel, shouldRender, reason, cancelAll } = this.state;
    if (!shouldRender) return <div>Loading...</div>;
    return (
      <LayoutContentWrapper style={{ height: 'auto' }}>
        <LayoutContent>
          {OrderCancelations && (
            <CancelBanner>
              <TxtStrong>
                ESTATUS DE CANCELACIONES{' '}
                <TxtData onClick={this.showpopup}>#{folio}</TxtData> HAZ CLICK
                SOBRE LA ORDEN PARA VER LOS DETALLES
              </TxtStrong>
              <Modal
                visible={visible}
                onCancel={this.handleCancel}
                footer={null}
              >
                <OrderModal modaldata={modaldata} order={folio} />
              </Modal>
            </CancelBanner>
          )}
          <CancelActivity stateCancel={this.stateCancel} dataorder={order} />
          <Seccion>
            <NumberOrder
              dataorder={order}
              showCancel={showCancel}
              cancelAllOrder={this.cancelAllOrder}
              cancelAll={cancelAll}
            />
          </Seccion>
          <Seccion>
            <ItemsPurchased
              showCancel={showCancel}
              products={products}
              order={order}
              cancelquantity={this.cancelquantity}
              cancelAll={cancelAll}
            />
          </Seccion>
          {showCancel && (
            <Seccion>
              <MotivoCancelacion
                cancelReason={this.cancelReason}
                reason={reason}
                verifyData={this.verifyData}
              />
            </Seccion>
          )}
          <Seccion>
            <Paymode dataorder={order} />
          </Seccion>
          <Seccion>
            <SapDocuments dataorder={order} />
          </Seccion>
          <Seccion>
            <ShippingOrder shippingdata={order} />
          </Seccion>
          {Broker && (
            <Seccion>
              <Advisor asesordata={asesordata} />
            </Seccion>
          )}
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

export default connect(
  containerSelector,
  dispatch
)(OrderSingle);
