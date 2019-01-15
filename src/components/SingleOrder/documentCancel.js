import React from 'react';
import { Col, Row } from 'antd';
import { CancelSap } from '../../containers/Order/single.style';

const DocumentsCancel = ({
  dataCancel: {
    type,
    result,
    Payments,
    PaymentsCancel,
    series,
    RequestTransfer,
    products,
  },
}) => (
  <div>
    <h3>
      <strong>DOCUMENTOS SAP CANCELACIÓN </strong>
    </h3>
    <CancelSap>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <ul>
            <li>Tipo : {type}</li>
            <li>Resultado : {result}</li>
            <li>
              Pagos:
              <ul>
                {Payments.map(({ pay }) => (
                  <li>{pay}</li>
                ))}
              </ul>
            </li>
            <li>
              Pagos cancelados : {PaymentsCancel ? 'Aceptado' : 'Rechazado'}
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <ul>
            <li>Series : {series ? 'Aceptado' : 'Rechazado'}</li>
            <li>
              Solicitud de transferencia:
              <ul>
                {RequestTransfer.map(({ Request }) => (
                  <li>{Request}</li>
                ))}
              </ul>
            </li>
            <li>
              Productos:
              <ul>
                <li>
                  {products.map(item => (
                    <span>
                      {item} {''},{' '}
                    </span>
                  ))}
                </li>{' '}
              </ul>{' '}
            </li>
          </ul>
        </Col>
      </Row>
    </CancelSap>
  </div>
);

export default DocumentsCancel;
