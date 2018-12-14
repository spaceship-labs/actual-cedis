import React, { Component } from 'react';
import { Row, Button } from 'antd';
import { StatusPop, StatusH3, ItemCol } from './CancelRequest.style';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { toogle, handleClickAY, handleClickAN } = this.props;
    if (toogle === true) {
      return (
        <StatusPop width="100px" height="auto">
          <ItemCol>
            <Row type="flex">
              <StatusH3
                font="18px"
                color="black"
                weight="bold"
                transform="uppercase"
                width="100%"
                align="center"
              >
                ¿Esta seguro que desea aprobar la siguiente operación?
              </StatusH3>
            </Row>
            <Row type="flex" justify="center">
              <Row type="flex" justify="center">
                <Button type="danger" size="large" onClick={handleClickAN}>
                  Cancelar
                </Button>
              </Row>
              <Row type="flex" justify="center">
                <Button type="primary" size="large" onClick={handleClickAY}>
                  Aceptar
                </Button>
              </Row>
            </Row>
          </ItemCol>
        </StatusPop>
      );
    }
    return <div />;
  }
}
