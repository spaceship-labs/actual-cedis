import React, { Component } from 'react';
import { Row } from 'antd';

import { RequestIcon, RequestH3 } from './request.style';
import Trash from '../../image/favicon.png';

export default class Cancelado extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  handleClick() {
    this.setState({});
  }

  render() {
    const { rechazado } = this.props;
    if (rechazado === true) {
      return (
        <Row type="flex" justify="end">
          <RequestIcon
            src={Trash}
            alt="trash"
            width="20px"
            height="20px"
            margin="0px 14px 0px 0px"
          />
          <RequestH3
            weight="normal"
            align="right"
            margin="0px 0px 5px 0px"
            color="red"
            transform="uppercase"
            font="12px"
          >
            <strong>Cancelado</strong>
          </RequestH3>
        </Row>
      );
    }
    return <div />;
  }
}
