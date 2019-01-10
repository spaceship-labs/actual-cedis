import React, { Component } from 'react';
import { Row, Col } from 'antd';
import {
  TitleModal,
  TxtStrong,
  TxtData,
  StateClr,
} from '../../containers/Order/single.style';

class OrderModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: {
        rejected: 'No autorizado',
        authorized: 'Autorizado',
        pending: 'Pendiente',
      },
    };
  }

  render() {
    const { modaldata, orderFolio, products } = this.props;
    const { state } = this.state;
    return (
      <div>
        <TitleModal>
          <TxtStrong>
            DETALLE DE CANCELACIONES <TxtData>#{orderFolio}</TxtData>
          </TxtStrong>
        </TitleModal>
        {modaldata.map(({ Detail, status, quantity }) => (
          <Row>
            <Col span={12}>
              <p>SKU: {products[Detail].CodeBars} </p>
              <p>Cantidad: {quantity}</p>
            </Col>
            <Col span={12}>
              <StateClr auth={status}>{state[status]}</StateClr>
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}

export default OrderModal;
