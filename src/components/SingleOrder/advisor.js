import React from 'react';
import { Asesor } from '../../containers/Order/single.style';

const Advisor = ({ asesordata: { nombre, telefono, celular, email } }) => (
  <div>
    <h3>
      <strong>
        <i className="icon-vendedor" /> ASESOR DE INTERIORES
      </strong>
    </h3>
    <Asesor>
      <div>
        <p>
          <strong>Nombre: </strong> {`${nombre || 'N/A'}`}
        </p>
        <p>
          <strong>Teléfono: </strong> {`${telefono || 'N/A'}`}
        </p>
        <p>
          <strong>Celular: </strong> {`${celular || 'N/A'}`}
        </p>
        <p>
          <strong>Email:</strong> {`${email || 'N/A'}`}
        </p>
      </div>
    </Asesor>
  </div>
);

export default Advisor;
