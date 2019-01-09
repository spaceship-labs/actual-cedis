import React, { Component } from 'react';
import { Row, Input } from 'antd';
import {
  StatusPop,
  StatusH3,
  ItemCol,
  AllButton,
} from '../../CancelRequest.style';

class TestRequestConfirmAprove extends Component {
  constructor(props) {
    super(props);
    this.state = {
      safeWord: '',
    };
  }

  handleInput = e => {
    const { value } = e.target;
    this.setState({ safeWord: value });
  };

  render() {
    const { show, cancelCb, acceptCb, folio } = this.props;
    const { safeWord } = this.state;
    return show ? (
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
            <p>{`Para continuar, ingrese el numero de folio (${folio})`}</p>
            <Input onChange={this.handleInput} value={safeWord} />
          </Row>
          <Row type="flex" justify="center">
            <Row type="flex" justify="center">
              <AllButton
                type="danger"
                size="large"
                color="white!important"
                transform="uppercase"
                bgcolor="#C82828!important"
                font="10px!important"
                onClick={cancelCb}
              >
                Cancelar
              </AllButton>
            </Row>
            <Row type="flex" justify="center">
              <AllButton
                type="primary"
                size="large"
                color="white!important"
                transform="uppercase"
                bgcolor="#33BA2C!important"
                font="10px!important"
                onClick={acceptCb}
                disabled={`${folio}` !== safeWord}
              >
                Aceptar
              </AllButton>
            </Row>
          </Row>
        </ItemCol>
      </StatusPop>
    ) : null;
  }
}

export default TestRequestConfirmAprove;
