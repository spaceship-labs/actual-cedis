import React from 'react';
import { Row, Col } from 'antd';
import Numeral from 'numeral';
import moment from 'moment';
import { OrderPago } from '../../containers/Order/single.style';
import PaymentSale from './paymentSale';

const Paymode = ({
  dataorder: { Payments, subtotal, total, discount, ammountPaid, Client },
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
          {Payments.map(
            ({ type, folio, createdAt, ammount, name, currency, id }) => (
              <Row key={id}>
                <Col span={4}>{name} </Col>
                <Col span={4}>{moment(createdAt).format('DD/MM/YYYY')}</Col>
                <Col span={4}>{folio} </Col>
                <Col span={4}>{type} </Col>
                <Col span={4}>{currency} </Col>
                <Col span={4}>{Numeral(ammount).format('$0,0.00')} </Col>
              </Row>
            )
          )}
          <PaymentSale
            totalPayment={{ subtotal, total, discount, ammountPaid, Client }}
          />
        </div>
      </div>
    </OrderPago>
  </div>
);

export default Paymode;
