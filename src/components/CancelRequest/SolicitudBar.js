import React from 'react';
import {
  SolicitudContainer,
  SolicitudItem,
  LogoCol,
  TextCol,
  ButtonsCol,
  ColCenter,
  AllButton,
  StatusIcon,
  StatusSpan,
} from './CancelRequest.style';
import Trash from '../../image/svgs/trash.svg';
import { antiBind } from '../../helpers/utils';

const SolicitudBar = ({ folio, buttonsCb }) => (
  <SolicitudContainer>
    <SolicitudItem type="flex" justify="start">
      <LogoCol span={2}>
        <StatusIcon
          src={Trash}
          alt="trash"
          width="30px"
          height="36px"
          margin="2px 0px"
        />
      </LogoCol>
      <TextCol md={14} lg={16}>
        <StatusSpan weight="bold" transform="uppercase">
          Solicitud de la cancelación
        </StatusSpan>
        <StatusSpan
          weight="light"
          transform="uppercase"
          padding="0px 0px 0px 10px"
        >
          {folio}
        </StatusSpan>
      </TextCol>
      <ButtonsCol md={8} lg={6}>
        <ColCenter>
          <AllButton
            type="primary"
            size="default"
            color="white!important"
            transform="uppercase"
            bgcolor="#33BA2C!important"
            font="10px!important"
            onClick={antiBind(buttonsCb, 'authorized')}
          >
            <strong> Autorizar todo</strong>
          </AllButton>
        </ColCenter>
        <ColCenter>
          <AllButton
            type="danger"
            size="default"
            color="white!important"
            transform="uppercase"
            bgcolor="#C82828!important"
            font="10px!important"
            onClick={antiBind(buttonsCb, 'rejected')}
          >
            <strong> Rechazar todo</strong>
          </AllButton>
        </ColCenter>
      </ButtonsCol>
    </SolicitudItem>
  </SolicitudContainer>
);

export default SolicitudBar;
