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
import { modaldata, articulos, asesordata } from './fakeData';
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
    this.state = {
      visible: false,
      showCancel: false,
    };
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

  render() {
    const { order } = this.props;
    const { folio, Broker, OrderCancelations } = order;
    const { visible, showCancel } = this.state;
    if (!folio) return <div>Loading...</div>;
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
            <NumberOrder dataorder={order} showCancel={showCancel} />
          </Seccion>
          <Seccion>
            <ItemsPurchased showCancel={showCancel} articulos={articulos} />
          </Seccion>
          {showCancel && (
            <Seccion>
              <MotivoCancelacion />
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
