import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { StatusIcon, StatusP } from './CancelRequest.style';
import Autorizar from '../../image/svgs/autorizar.svg';
import Trash from '../../image/svgs/trash.svg';

export default class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { toogle, handleClickAprove, handleClickDenied } = this.props;
    if (toogle === true) {
      return (
        <Row>
          <Col span={12} onClick={handleClickAprove}>
            <Row type="flex" justify="center">
              <StatusIcon
                cursor="pointer"
                src={Autorizar}
                alt="authorize"
                width="30px"
                height="30px"
                margin="0px 0px 0px 0px"
              />
            </Row>
            <StatusP
              cursor="pointer"
              font="8px"
              align="center"
              color="#33BA2C"
              space="normal"
              transform="uppercase"
              padding="0px 5px"
            >
              <strong>Autorizar Cancelación</strong>
            </StatusP>
          </Col>
          <Col span={12} onClick={handleClickDenied}>
            <Row type="flex" justify="center">
              <StatusIcon
                cursor="pointer"
                src={Trash}
                alt="cancel"
                width="30px"
                height="30px"
                margin="0px 0px 0px 0px"
              />
            </Row>
            <StatusP
              cursor="pointer"
              font="8px"
              align="center"
              color="#C82828"
              space="normal"
              transform="uppercase"
            >
              <strong>No Autorizar Cancelación</strong>
            </StatusP>
          </Col>
        </Row>
      );
    }
    return <div />;
  }
}
