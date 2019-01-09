import React, { Component } from 'react';
import { Row, Col } from 'antd';
import {
  TitleModal,
  TxtStrong,
  TxtData,
  StateClr,
} from '../../containers/Order/single.style';

class OrderModal extends Component {
  componentDidMount() {}

  render() {
    const { modaldata, order } = this.props;
    return (
      <div>
        <TitleModal>
          <TxtStrong>
            DETALLE DE CANCELACIONES <TxtData>#{order}</TxtData>
          </TxtStrong>
        </TitleModal>
        {modaldata.map(({ sku, auth }) => (
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
