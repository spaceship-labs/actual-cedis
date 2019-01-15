import React from 'react';
import { Sap } from '../../containers/Order/single.style';

const SapDocuments = ({ dataorder: { OrdersSap } }) => (
  <div>
    <h3>
      <strong>DOCUMENTOS SAP</strong>
    </h3>
    <Sap>
      {OrdersSap.map(({ document, PaymentsSap, id }) => (
        <ul key={id}>
          <li>
            {' '}
            <strong>Orden SAP:</strong> {document}{' '}
          </li>
          <li>
            <strong>Pagos :</strong>{' '}
            <ul>
              {PaymentsSap
                ? PaymentsSap.map(
                    ({ id: idPaymentSap, document: documentPaymentSap }) => (
                      <li key={idPaymentSap}>{documentPaymentSap}</li>
                    )
                  )
                : 'Ninguno'}
            </ul>
          </li>
        </ul>
      ))}
    </Sap>
  </div>
);

export default SapDocuments;
