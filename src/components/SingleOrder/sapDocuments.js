import React from 'react';
import { Sap } from '../../containers/Order/single.style';

const SapDocuments = ({ dataorder: { OrdersSap } }) => (
  <div>
    <h3>
      <strong>Documentos SAP</strong>
    </h3>
    <Sap>
      <ul>
        {OrdersSap.map(({ document, invoiceSap }) => (
          <li>
            <p>
              <strong>Orden SAP:</strong> {document}
            </p>
            <p>
              <strong>Factura de deudores SAP:</strong>{' '}
              {`${invoiceSap || 'N/A'}`}
            </p>
          </li>
        ))}
      </ul>
    </Sap>
  </div>
);

export default SapDocuments;
