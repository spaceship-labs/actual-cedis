import React from 'react';
import {
  BarChanges,
  SolicitudItem,
  AllButton,
  ColCenter,
} from '../CancelRequest.style';

const CambiosBar = () => (
  <BarChanges>
    <SolicitudItem type="flex" justify="end">
      <ColCenter>
        <AllButton
          type="default"
          size="default"
          color="white!important"
          transform="uppercase"
          bgcolor="black!important"
          font="12px!important"
        >
          <strong>GUARDAR CAMBIOS</strong>
        </AllButton>
      </ColCenter>
    </SolicitudItem>
  </BarChanges>
);

export default CambiosBar;
