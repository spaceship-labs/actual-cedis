import React from 'react';
import { Col } from 'antd';
import Numeral from 'numeral';
import { Rowpay, RowSale, RowTaxes } from '../../containers/Order/single.style';

const PaymentSale = ({
  money: { subcompra, descuento, totalcomp, totalpag, saldo, saldoCliente },
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
          <strong>{Numeral(subcompra).format('$0,0.00')}</strong>
        </Rowpay>
        <Rowpay>
          <strong>{Numeral(descuento).format('$0,0.00')}</strong>
        </Rowpay>
        <Rowpay>
          <strong>{Numeral(totalcomp).format('$0,0.00')}</strong>
        </Rowpay>
        <Rowpay>
          <strong>{Numeral(totalpag).format('$0,0.00')}</strong>
        </Rowpay>
        <Rowpay>
          <strong>{Numeral(saldo).format('$0,0.00')}</strong>
        </Rowpay>
        <br />
        <Rowpay>
          <strong>{Numeral(saldoCliente).format('$0,0.00')}</strong>
        </Rowpay>
      </Col>
    </RowSale>
  </div>
);

export default PaymentSale;
