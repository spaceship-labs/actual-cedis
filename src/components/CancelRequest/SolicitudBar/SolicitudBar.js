/* eslint-disable no-unused-vars */
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
} from '../CancelRequest.style';
import Trash from '../../../image/svgs/trash.svg';

// const antiBind = (fn, ...args) => e => fn(e, ...args);

const Buttons = buttons => (
  <ButtonsCol md={8} lg={6}>
    <ColCenter>
      <AllButton
        type="primary"
        size="default"
        bgcolor="#33BA2C!important"
        onClick={() => buttons('authorized')}
      >
        <strong> Autorizar todo</strong>
      </AllButton>
    </ColCenter>
    <ColCenter>
      <AllButton
        type="danger"
        size="default"
        bgcolor="#C82828!important"
        onClick={() => buttons('rejected')}
      >
        <strong> Rechazar todo</strong>
      </AllButton>
    </ColCenter>
  </ButtonsCol>
);

const SolicitudBar = ({ folio, buttons, status }) => (
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
          #{folio}
        </StatusSpan>
      </TextCol>
      {status === 'pending' ? Buttons(buttons) : null}
    </SolicitudItem>
  </SolicitudContainer>
);

export default SolicitudBar;
