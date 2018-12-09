import React, { Component } from 'react';
import { Row } from 'antd';
import { RequestIcon, RequestH3 } from './request.style';
import Trash from '../../image/favicon.png';
import Autorizado from './Autorizado';
import Cancelado from './Cancelado';

export default class Regresar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { toogle, autorizado, rechazado, goBack } = this.props;
    if (toogle === true) {
      return (
        <div>
          <Cancelado rechazado={rechazado} />
          <Autorizado autorizado={autorizado} />
          <Row type="flex" justify="end" onClick={goBack}>
            <RequestIcon
              src={Trash}
              alt="trash"
              width="20px"
              height="20px"
              margin="0px 24px 0px 0px"
            />
            <RequestH3
              cursor="pointer"
              weight="normal"
              align="right"
              margin="0px"
              color="lightgrey"
              transform="uppercase"
              font="12px"
            >
              <strong>Regresar</strong>
            </RequestH3>
          </Row>
        </div>
      );
    }
    return <div />;
  }
}
