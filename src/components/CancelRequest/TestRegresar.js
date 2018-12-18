import React from 'react';
import { Row } from 'antd';
import { StatusIcon, StatusH3 } from './CancelRequest.style';
import TestAutorizado from './TestAutorizado';
import TestCancelado from './TestCancelado';
import Transfer from '../../image/svgs/transfer.svg';

const TestRegresar = ({ toogle, autorizado, rechazado, goBack }) => {
  const isToogled = toogle;
  const Aprove = autorizado;
  const Denied = rechazado;
  const Back = goBack;
  if (isToogled) {
    return (
      <div>
        <TestCancelado rechazado={Denied} />
        <TestAutorizado autorizado={Aprove} />
        <br />
        <Row type="flex" justify="end" onClick={Back}>
          <StatusIcon
            src={Transfer}
            alt="transfer"
            width="30px"
            height="30px"
            margin="0px 24px 0px 0px"
            cursor="pointer"
          />
          <StatusH3
            cursor="pointer"
            weight="normal"
            align="right"
            margin="0px"
            color="lightgrey"
            transform="uppercase"
            font="12px"
            lheight="2.5"
          >
            <strong>Regresar</strong>
          </StatusH3>
        </Row>
      </div>
    );
  }
  return null;
};

export default TestRegresar;
