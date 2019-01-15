import React from 'react';
import { Row, Col } from 'antd';
import Numeral from 'numeral';
import moment from 'moment';
import { OrderPago } from '../../containers/Order/single.style';
import PaymentSale from './paymentSale';

const types = {
  CLIENT_BALANCE: 'client-balance',
  CASH: 'cash',
  CASH_USD: 'cash-usd',
  CHEQUE: 'cheque',
  DEPOSIT: 'deposit',
  TRANSFER: 'transfer',
  TRANSFER_USD: 'transfer-usd',
  CREDIT_CARD: 'credit-card',
  DEBIT_CARD: 'debit-card',
  SINGLE_PAYMENT_TERMINAL: 'single-payment-terminal',
  MSI_3: '3-msi',
  MSI_6: '6-msi',
  MSI_9: '9-msi',
  MSI_12: '12-msi',

  MSI_3_BANAMEX: '3-msi-banamex',
  MSI_6_BANAMEX: '6-msi-banamex',
  MSI_9_BANAMEX: '9-msi-banamex',
  MSI_12_BANAMEX: '12-msi-banamex',

  MSI_13: '13-msi',
  MSI_18: '18-msi',
};

const isTransferPayment = type =>
  type === types.TRANSFER || type === types.TRANSFER_USD;
const isDepositPayment = type => type === types.DEPOSIT;

const mapTerminalCode = code => {
  const mapper = {
    'american-express': 'American Express',
    banamex: 'Banamex',
    bancomer: 'Bancomer',
    banorte: 'Banorte',
    santander: 'Santander',
  };
  return mapper[code] || '';
};

const getPaymentTypeString = (type, msi) => {
  let paymentType = '1 sola exhibición';
  if (msi.length > 0) {
    paymentType = `${msi} meses sin intereses`;
    return paymentType;
  }
  if (isTransferPayment(type)) {
    paymentType = 'Transferencia';
  } else if (isDepositPayment(type)) {
    paymentType = 'Deposito en ventanilla';
  }

  switch (type) {
    case types.CASH:
    case types.CASH_USD:
      paymentType = 'Pago de contado';
      break;
    case types.EWALLET_TYPE:
      paymentType = 'Monedero electrónico';
      break;
    case types.CLIENT_BALANCE:
      paymentType = 'Saldo a favor cliente';
      break;
    default:
  }
  return paymentType;
};

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
            ({
              type,
              folio,
              createdAt,
              ammount,
              name,
              terminal = 'N/A',
              id,
              msi = '',
            }) => (
              <Row key={id}>
                <Col span={4}>{name} </Col>
                <Col span={4}>{moment(createdAt).format('DD/MM/YYYY')}</Col>
                <Col span={4}>{folio} </Col>
                <Col span={4}>{getPaymentTypeString(type, msi)} </Col>
                <Col span={4}>{mapTerminalCode(terminal)} </Col>
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
