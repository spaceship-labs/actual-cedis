import React from 'react';
import { StatusH3, StatusP, TextBlock } from '../CancelRequest.style';

const OrderText = ({ text }) => (
  <TextBlock>
    <StatusH3 transform="uppercase" weight="bolder">
      Motivo de la cancelación:
    </StatusH3>
    <StatusP align="justify">{text}</StatusP>
  </TextBlock>
);

export default OrderText;
