import React from 'react';
import { Row, Col } from 'antd';
import Numeral from 'numeral';
import { OrderPago } from '../../containers/Order/single.style';
import PaymentSale from './paymentSale';

const Paymode = ({
  modopay: { forma, fecha, folio, tipo, terminal, monto, money },
}) => (
  <div>
    <h3>
      <strong>PAGOS</strong>
    </h3>
    <OrderPago>
      <div>
        <div>
          <div>
            <strong>FORMA DE PAGO</strong>
          </div>
          <Row>
            <Col span={4}>
              <strong>FORMA DE PAGO</strong>
            </Col>
            <Col span={4}>
              <strong>FECHA</strong>
            </Col>
            <Col span={4}>
              <strong>FOLIO</strong>
            </Col>
            <Col span={4}>
              <strong>TIPO DE PAGO</strong>
            </Col>
            <Col span={4}>
              <strong>TERMINAL</strong>
            </Col>
            <Col span={4}>
              <strong>MONTO COBRADO</strong>
            </Col>
          </Row>
          <Row>
            <Col span={4}>{forma} </Col>
            <Col span={4}>{fecha} </Col>
            <Col span={4}>{folio} </Col>
            <Col span={4}>{tipo} </Col>
            <Col span={4}>{terminal} </Col>
            <Col span={4}>{Numeral(monto).format('$0,0.00')} </Col>
          </Row>

          <PaymentSale money={money} />
        </div>
      </div>
    </OrderPago>
  </div>
);

export default Paymode;
