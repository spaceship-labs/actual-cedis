import React from 'react';
import { Sap } from '../../containers/Order/single.style';

const SapDocuments = ({ saporder }) => (
  <div>
    <h3>
      <strong>Documentos SAP</strong>
    </h3>
    <Sap>
      <ul>
        {saporder.map(item => (
          <li>
            <p>
              <strong>Orden SAP:</strong> {item.document}
            </p>
            <p>
              <strong>Factura de deudores SAP:</strong>{' '}
              {`${item.invoiceSap || 'N/A'}`}
            </p>
          </li>
        ))}
      </ul>
    </Sap>
  </div>
);

export default SapDocuments;
