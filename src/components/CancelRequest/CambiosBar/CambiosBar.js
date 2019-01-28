import React from 'react';
import {
  BarChanges,
  SolicitudItem,
  AllButton,
  ColCenter,
} from '../CancelRequest.style';

const CambiosBar = ({ Toogle, status }) => (
  <BarChanges>
    <SolicitudItem type="flex" justify="end">
      <ColCenter>
        {status === 'pending' ? (
          <AllButton
            type="default"
            size="default"
            color="white!important"
            transform="uppercase"
            bgcolor="black!important"
            font="12px!important"
            onClick={Toogle}
          >
            <strong>GUARDAR CAMBIOS</strong>
          </AllButton>
        ) : null}
      </ColCenter>
    </SolicitudItem>
  </BarChanges>
);

export default CambiosBar;
