import React, { Component } from 'react';
import { Row, Button } from 'antd';
import { RequestPop, RequestH3 } from './request.style';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: null,
    };
  }

  render() {
    const { toggle, handleClickAY, handleClickAN } = this.props;
    if (toggle === true) {
      return (
        <RequestPop width="100px" height="auto">
          <div className="request-bar-item flex column">
            <Row type="flex">
              <RequestH3
                font="18px"
                color="black"
                weight="bold"
                transform="uppercase"
                width="100%"
                align="center"
              >
                ¿Esta seguro que desea guardar los cambios?
              </RequestH3>
            </Row>
            <Row type="flex" justify="center">
              <div className="flex row center">
                <Button type="danger" size="large" onClick={handleClickAN}>
                  Cancelar
                </Button>
              </div>
              <div className="flex row center">
                <Button type="primary" size="large" onClick={handleClickAY}>
                  Aceptar
                </Button>
              </div>
            </Row>
          </div>
        </RequestPop>
      );
    }
    return null;
  }
}
