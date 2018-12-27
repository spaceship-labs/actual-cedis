import React from 'react';
import { Row } from 'antd';
import { StatusIcon, StatusH3 } from '../../CancelRequest.style';
import Cancelar from '../../../../image/svgs/cancelar.svg';

const TestCancelado = ({ rechazado }) => {
  const UnAuth = rechazado;
  if (UnAuth) {
    return (
      <Row type="flex" justify="end">
        <StatusIcon
          src={Cancelar}
          alt="cancelar"
          width="30px"
          height="30px"
          margin="0px 14px 0px 0px"
        />
        <StatusH3
          weight="normal"
          align="right"
          margin="0px 0px 5px 0px"
          color="#C82828"
          transform="uppercase"
          font="12px"
          lheight="2.5"
        >
          <strong>Cancelado</strong>
        </StatusH3>
      </Row>
    );
  }
  return null;
};

export default TestCancelado;
