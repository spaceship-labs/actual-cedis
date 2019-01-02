import React from 'react';
import { Row, Col } from 'antd';
import { OrderEnvio } from '../../containers/Order/single.style';

const ShippingOrder = ({
  shippingdata: {
    E_Mail: Email,
    Tel1: Tel,
    Cellolar: Cel,
    address,
    U_Noexterior: noExt,
    U_Nointerior: noInt,
    U_Colonia: District,
    U_Mpio: Tow,
    U_Ciudad: City,
    U_Estado: State,
    U_CP: PostalCode,
    U_Entrecalle: BetStreet,
    U_Ycalle: BetStreet2,
    U_Notes1: Reference,
  },
}) => (
  <div>
    <h3>
      <strong>
        <i className="icon-envio" /> ENVÍO
      </strong>
    </h3>
    <OrderEnvio>
      <div>
        <div>
          <Row>
            <Col span={12}>
              <p>
                <strong>Email: </strong> {`${Email || 'N/A'}`}
              </p>
              <p>
                <strong>Télefono: </strong> {`${Tel || 'N/A'}`}
              </p>
              <p>
                <strong>Celular: </strong> {`${Cel || 'N/A'}`}
              </p>
              <p>
                <strong>Calle: </strong> {`${address || 'N/A'}`}
              </p>
              <p>
                <strong>No. exterior: </strong> {`${noExt || 'N/A'}`}
              </p>
              <p>
                <strong>No. interior: </strong> {`${noInt || 'N/A'}`}
              </p>
              <p>
                <strong>Colonia: </strong> {`${District || 'N/A'}`}
              </p>
            </Col>
            <Col span={12}>
              <p>
                <strong>Municipio: </strong>
                {`${Tow || 'N/A'}`}
              </p>
              <p>
                <strong>Ciudad: </strong>
                {`${City || 'N/A'}`}
              </p>
              <p>
                <strong>Estado: </strong>
                {`${State || 'N/A'}`}
              </p>
              <p>
                <strong>C.P.: </strong>
                {`${PostalCode || 'N/A'}`}
              </p>
              <p>
                <strong>Entre calle: </strong>
                {`${BetStreet || 'N/A'}`}
              </p>
              <p>
                <strong>Y calle: </strong>
                {`${BetStreet2 || 'N/A'}`}
              </p>
              <p>
                <strong>Referencias: </strong>
                {`${Reference || 'N/A'}`}
              </p>
            </Col>
          </Row>
          <p>
            El personal de entrega le estará contactando vía telefónica en
            varias ocasiones:
          </p>
          <ul>
            <li>
              <strong>Coordinación de la fecha de entrega:</strong> En los
              siguientes 24 horas hábiles después de la compra.
            </li>
            <li>
              <strong>Coordinación de la hora de entrega:</strong> Mínimo 24
              horas antes de la entrega.
            </li>
            <li>
              <strong>Aviso de la llegada de la unidad de entrega</strong> 1
              hora antes de la entrega
            </li>
          </ul>
        </div>
      </div>
    </OrderEnvio>
  </div>
);

export default ShippingOrder;
