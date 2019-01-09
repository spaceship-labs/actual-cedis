import React from 'react';
import { Col } from 'antd';
import Numeral from 'numeral';
import { Rowpay, RowSale, RowTaxes } from '../../containers/Order/single.style';

const PaymentSale = ({
  totalPayment: {
    subtotal,
    discount,
    total,
    ammountPaid,
    Client: { Balance },
  },
}) => (
  <div>
    <RowSale>
      <Col xs={6} sm={8} md={6} lg={8} xl={10}>
        <RowTaxes>
          <span>*Todos los montos incluyen impuestos</span>
        </RowTaxes>
      </Col>
      <Col xs={13} sm={12} md={12} lg={8} xl={10}>
        <Rowpay>
          <strong>SUBTOTAL COMPRA:</strong>
        </Rowpay>
        <Rowpay>
          <strong>DESCUENTOS COMPRA:</strong>
        </Rowpay>
        <Rowpay>
          <strong>TOTAL COMPRA:</strong>
        </Rowpay>
        <Rowpay>
          <strong>TOTAL PAGADO:</strong>
        </Rowpay>
        <Rowpay>
          <strong>SALDO:</strong>
        </Rowpay>
        <br />
        <Rowpay>
          <strong>SALDO CLIENTE:</strong>
        </Rowpay>
      </Col>
      <Col xs={5} sm={4} md={6} lg={8} xl={4}>
        <Rowpay>
          <strong>{Numeral(subtotal).format('$0,0.00')}</strong>
        </Rowpay>
        <Rowpay>
          <strong>{Numeral(discount).format('$0,0.00')}</strong>
        </Rowpay>
        <Rowpay>
          <strong>{Numeral(total).format('$0,0.00')}</strong>
        </Rowpay>
        <Rowpay>
          <strong>{Numeral(ammountPaid).format('$0,0.00')}</strong>
        </Rowpay>
        <Rowpay>
          <strong>{Numeral(total - ammountPaid).format('$0,0.00')}</strong>
        </Rowpay>
        <br />
        <Rowpay>
          <strong>{Numeral(Balance).format('$0,0.00')}</strong>
        </Rowpay>
      </Col>
    </RowSale>
  </div>
);

export default PaymentSale;
