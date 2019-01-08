import React from 'react';
import { Row, Col } from 'antd';
import { StatusIcon, StatusP } from '../CancelRequest.style';
import Trash from '../../../image/favicon.png';

const TestOption = ({ handleClickAprove, handleClickDenied }) => {
  const handleAprove = handleClickAprove;
  const handleDenied = handleClickDenied;
  return (
    <Row>
      <Col span={12} onClick={handleAprove}>
        <Row type="flex" justify="center">
          <StatusIcon
            cursor="pointer"
            src={Trash}
            alt="trash"
            width="20px"
            height="20px"
            margin="0px 0px 0px 0px"
          />
        </Row>
        <StatusP
          cursor="pointer"
          font="8px"
          align="center"
          color="green"
          space="normal"
          transform="uppercase"
          padding="0px 5px"
        >
          <strong>Autorizar Cancelación</strong>
        </StatusP>
      </Col>
      <Col span={12} onClick={handleDenied}>
        <Row type="flex" justify="center">
          <StatusIcon
            cursor="pointer"
            src={Trash}
            alt="trash"
            width="20px"
            height="20px"
            margin="0px 0px 0px 0px"
          />
        </Row>
        <StatusP
          cursor="pointer"
          font="8px"
          align="center"
          color="red"
          space="normal"
          transform="uppercase"
        >
          <strong>No Autorizar Cancelación</strong>
        </StatusP>
      </Col>
    </Row>
  );
};

export default TestOption;
