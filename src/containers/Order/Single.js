import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Container,
  Seccion,
  CancelBanner,
  Modal,
  TxtStrong,
  TxtData,
} from './single.style';
import { getOrder } from './actions';
import selector from './selectors';
// import Title from 'antd/lib/skeleton/Avatar';
import OrderModal from '../../components/SingleOrder/modal';
import {
  modaldata,
  dataorder,
  articulos,
  modopay,
  saporder,
  shippingdata,
  asesordata,
} from './fakeData';
import CancelActivity from '../../components/SingleOrder/cancelActivity';
import NumberOrder from '../../components/SingleOrder/numberOrder';
import ItemsPurchased from '../../components/SingleOrder/itemsPurchased';
import MotivoCancelacion from '../../components/SingleOrder/motivo';
import Paymode from '../../components/SingleOrder/paymode';
import SapDocuments from '../../components/SingleOrder/sapDocuments';
import ShippingOrder from '../../components/SingleOrder/shippingOrder';
import Advisor from '../../components/SingleOrder/advisor';
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
    const data = {
      VALOR: '017588',
      name: 'Fernando Marquez',
      E_Mail: 'yupit@spaceshiplabs.com',
      Store_name: 'yupitslabs',
    };
    const { visible, showCancel } = this.state;
    return (
      <Container>
        <CancelBanner>
          <TxtStrong>
            ESTATUS DE CANCELACIONES{' '}
            <TxtData onClick={this.showpopup}>#{data.VALOR}</TxtData> HAZ CLICK
            SOBRE LA ORDEN PARA VER LOS DETALLES
          </TxtStrong>
          <Modal visible={visible} onCancel={this.handleCancel} footer={null}>
            <OrderModal modaldata={modaldata} order={data.VALOR} />
          </Modal>
        </CancelBanner>
        <CancelActivity stateCancel={this.stateCancel} dataorder={dataorder} />
        <Seccion>
          <NumberOrder dataorder={dataorder} showCancel={showCancel} />
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
          <Paymode modopay={modopay} />
        </Seccion>
        <Seccion>
          <SapDocuments saporder={saporder} />
        </Seccion>
        <Seccion>
          <ShippingOrder shippingdata={shippingdata} />
        </Seccion>
        <Seccion>
          <Advisor asesordata={asesordata} />
        </Seccion>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getOrder }, dispatch);

export default connect(
  selector,
  mapDispatchToProps
)(OrderSingle);
