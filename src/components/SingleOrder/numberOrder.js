import React from 'react';
import { OrderTextBlock } from '../../containers/Order/single.style';
import CancelAllButton from './cancelAllButton';

const NumberOrder = ({
  dataorder: {
    Client: { CardName, E_Mail: email },
    Store = { name: 'N/A' },
  },
  showCancel,
  cancelAllOrder,
  cancelAll,
}) => {
  const { name: storeName } = Store;
  return (
    <OrderTextBlock>
      <h3>
        <strong>¡GRACIAS POR SU COMPRA!</strong>
      </h3>
      <p>
        Estimado<strong> {CardName}</strong>
      </p>
      <p>
        Su compra ha sido procesada y en breve estará recibiendo su confirmación
        al correo electrónico
        <strong> {email}</strong>
      </p>

      <p>
        <strong>Tienda: </strong> {storeName}
      </p>
      <CancelAllButton
        showCancel={showCancel}
        cancelAllOrder={cancelAllOrder}
        cancelAll={cancelAll}
      />
    </OrderTextBlock>
  );
};

export default NumberOrder;
