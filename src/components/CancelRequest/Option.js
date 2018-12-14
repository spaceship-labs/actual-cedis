import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { RequestIcon, RequestP } from './request.style';
import Trash from '../../image/favicon.png';

export default class Option extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  handleClick() {
    this.setState({});
  }

  render() {
    const { toogle, handleClickAprove, handleClickDenied } = this.props;
    if (toogle === true) {
      return (
        <Row>
          <Col span={12} onClick={handleClickAprove}>
            <Row type="flex" justify="center">
              <RequestIcon
                cursor="pointer"
                src={Trash}
                alt="trash"
                width="20px"
                height="20px"
                margin="0px 0px 0px 0px"
              />
            </Row>
            <RequestP
              cursor="pointer"
              font="8px"
              align="center"
              color="green"
              space="normal"
              transform="uppercase"
            >
              <strong>Autorizar Cancelación</strong>
            </RequestP>
          </Col>
          <Col span={12} onClick={handleClickDenied}>
            <Row type="flex" justify="center">
              <RequestIcon
                cursor="pointer"
                src={Trash}
                alt="trash"
                width="20px"
                height="20px"
                margin="0px 0px 0px 0px"
              />
            </Row>
            <RequestP
              cursor="pointer"
              font="8px"
              align="center"
              color="red"
              space="normal"
              transform="uppercase"
            >
              <strong>No Autorizar Cancelación</strong>
            </RequestP>
          </Col>
        </Row>
      );
    }
    return <div />;
  }
}
