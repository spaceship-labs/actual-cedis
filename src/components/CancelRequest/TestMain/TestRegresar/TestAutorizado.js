import React from 'react';
import { Row } from 'antd';
import { StatusIcon, StatusH3 } from '../../CancelRequest.style';
import Autorizar from '../../../../image/svgs/autorizar.svg';

const TestAutorizado = ({ autorizado }) => {
  const Auth = autorizado;
  if (Auth) {
    return (
      <Row type="flex" justify="end">
        <StatusIcon
          src={Autorizar}
          alt="trash"
          width="30px"
          height="30px"
          margin="0px 10px 0px 0px"
        />
        <StatusH3
          weight="normal"
          align="right"
          margin="0px 0px 5px 0px"
          color="#33BA2Cs"
          transform="uppercase"
          font="12px"
          lheight="2.5"
          cursor="pointer"
        >
          <strong>Autorizado</strong>
        </StatusH3>
      </Row>
    );
  }
  return null;
};

export default TestAutorizado;
