import React from 'react';
import { Row, Col } from 'antd';
import { OrderEnvio } from '../../containers/Order/single.style';

const ShippingOrder = ({
  shippingdata: {
    Email,
    Télefono,
    Celular,
    Calle,
    Noexterior,
    Nointerior,
    Colonia,
    Municipio,
    Ciudad,
    Estado,
    CP,
    Entrecalle,
    calle,
    Referencias,
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
                <strong>Télefono: </strong> {`${Télefono || 'N/A'}`}
              </p>
              <p>
                <strong>Celular: </strong> {`${Celular || 'N/A'}`}
              </p>
              <p>
                <strong>Calle: </strong> {`${Calle || 'N/A'}`}
              </p>
              <p>
                <strong>No. exterior: </strong> {`${Noexterior || 'N/A'}`}
              </p>
              <p>
                <strong>No. interior: </strong> {`${Nointerior || 'N/A'}`}
              </p>
              <p>
                <strong>Colonia: </strong> {`${Colonia || 'N/A'}`}
              </p>
            </Col>
            <Col span={12}>
              <p>
                <strong>Municipio: </strong>
                {`${Municipio || 'N/A'}`}
              </p>
              <p>
                <strong>Ciudad: </strong>
                {`${Ciudad || 'N/A'}`}
              </p>
              <p>
                <strong>Estado: </strong>
                {`${Estado || 'N/A'}`}
              </p>
              <p>
                <strong>C.P.: </strong>
                {`${CP || 'N/A'}`}
              </p>
              <p>
                <strong>Entre calle: </strong>
                {`${Entrecalle || 'N/A'}`}
              </p>
              <p>
                <strong>Y calle: </strong>
                {`${calle || 'N/A'}`}
              </p>
              <p>
                <strong>Referencias: </strong>
                {`${Referencias || 'N/A'}`}
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
