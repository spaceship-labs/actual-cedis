import React, { Component } from 'react';
import {
  TitleModal,
  TxtStrong,
  TxtData,
  StateClr,
} from './../../containers/Order/single.style';
import { Row, Col } from 'antd';

class OrderModal extends Component {
  componentDidMount() {
    const modaldata = this.props;
    const order = this.props;
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <TitleModal>
          <TxtStrong>
            DETALLE DE CANCELACIONES <TxtData>#{this.props.order}</TxtData>
          </TxtStrong>
        </TitleModal>
        {this.props.modaldata.map(({ sku, auth }) => (
          <Row>
            <Col span={12}>
              <p>SKU: {sku} </p>
              <p>Cantidad: 123456789</p>
            </Col>
            <Col span={12}>
              <StateClr auth={auth}>
                {auth === 'true' ? 'Autorizado' : 'No Autorizado'}
              </StateClr>
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}

export default OrderModal;
