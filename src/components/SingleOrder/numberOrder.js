import React from 'react';
import { OrderTextBlock } from '../../containers/Order/single.style';
import CancelAllButton from './cancelAllButton';

const NumberOrder = ({
  dataorder: { name, E_Mail: email, Store_name: storename },
  showCancel,
}) => (
  <OrderTextBlock>
    <h3>
      <strong>¡GRACIAS POR SU COMPRA!</strong>
    </h3>
    <p>
      Estimado<strong> {name}</strong>
    </p>
    <p>
      Su compra ha sido procesada y en breve estará recibiendo su confirmación
      al correo electrónico
      <strong> {email}</strong>
    </p>

    <p>
      <strong>Tienda: </strong> {storename}
    </p>
    <CancelAllButton showCancel={showCancel} />
  </OrderTextBlock>
);

export default NumberOrder;
