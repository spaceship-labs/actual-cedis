import React, { Component } from 'react';
import { Row } from 'antd';
import { StatusIcon, StatusH3 } from './CancelRequest.style';
import Autorizado from './Autorizado';
import Cancelado from './Cancelado';
import Transfer from '../../image/svgs/transfer.svg';

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
          <br />
          <Row type="flex" justify="end" onClick={goBack}>
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
    return <div />;
  }
}
