import React from 'react';
import { Col, Row } from 'antd';
import { CancelSap } from '../../containers/Order/single.style';

const mapperType = {
  'InvoiceReserve-Cancelation': 'Factura de reserva SAP',
  orderCancelation: 'Order SAP',
};

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
      <strong>DOCUMENTOS CANCELACION </strong>
    </h3>
    <CancelSap>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <ul>
            <li>
              <strong>{mapperType[type]} : </strong>
              {result}
            </li>

            <li>
              <strong>Pagos :</strong>
              <ul>
                {Payments.map(({ pay }) => (
                  <li key={pay}>{pay}</li>
                ))}
              </ul>
            </li>
            {PaymentsCancel ? (
              <li>
                <strong>Pagos cancelados :</strong>
                <ul>
                  {PaymentsCancel.map(({ pay }) => (
                    <li key={pay}>{pay}</li>
                  ))}
                </ul>
              </li>
            ) : (
              ''
            )}
          </ul>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <ul>
            {series ? (
              <li>
                <strong>Series :</strong>
                <ul>
                  {series.map(({ pay }) => (
                    <li key={pay}>{pay}</li>
                  ))}
                </ul>
              </li>
            ) : (
              ''
            )}
            <li>
              <strong>Solicitud de translado :</strong>
              <ul>
                {RequestTransfer.map(({ Request }) => (
                  <li key={Request}>{Request}</li>
                ))}
              </ul>
            </li>
            <li>
              <strong>Productos sin cancelar :</strong>
              <ul>
                <li>
                  {products.map(item => (
                    <span key={item}>
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
