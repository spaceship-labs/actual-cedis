import React from 'react';
import { Row } from 'antd';
import { StatusIcon, StatusH3 } from '../../CancelRequest.style';
import Transfer from '../../../../image/svgs/transfer.svg';

const TestRegresar = ({ clickCb }) => (
  <div>
    <Row type="flex" justify="end" onClick={clickCb}>
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

export default TestRegresar;
