import React, { Component } from 'react';
import { Row } from 'antd';
import Trash from '../../image/favicon.png';
import { RequestIcon, RequestH3 } from './request.style';

export default class Autorizado extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  handleClick() {
    this.setState({});
  }

  render() {
    const { autorizado } = this.props;
    if (autorizado === true) {
      return (
        <Row type="flex" justify="end">
          <RequestIcon
            src={Trash}
            alt="trash"
            width="20px"
            height="20px"
            margin="0px 10px 0px 0px"
          />
          <RequestH3
            weight="normal"
            align="right"
            margin="0px 0px 5px 0px"
            color="lightgreen"
            transform="uppercase"
            font="12px"
          >
            <strong>Autorizado</strong>
          </RequestH3>
        </Row>
      );
    }
    return <div />;
  }
}
