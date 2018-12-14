import React, { Component } from 'react';
import { Row } from 'antd';
import { StatusIcon, StatusH3 } from './CancelRequest.style';
import Cancelar from '../../image/svgs/cancelar.svg';

export default class Cancelado extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { rechazado } = this.props;
    if (rechazado === true) {
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
    return <div />;
  }
}
