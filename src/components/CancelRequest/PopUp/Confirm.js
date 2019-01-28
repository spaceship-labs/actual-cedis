import React, { Component } from 'react';
import { Row, Input } from 'antd';
import {
  StatusPop,
  StatusH3,
  ItemCol,
  AllButton,
} from '../CancelRequest.style';

class Confirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  handleInput = e => {
    const { value } = e.target;
    this.setState({ password: value });
  };

  render() {
    const { show, accept, cancel, folio } = this.props;
    const { password } = this.state;
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
            <Input onChange={this.handleInput} value={password} />
            <br />
          </Row>
          <Row type="flex" justify="center">
            <Row type="flex" justify="center">
              <AllButton
                type="danger"
                size="large"
                bgcolor="#C82828!important"
                onClick={cancel}
              >
                Cancelar
              </AllButton>
            </Row>
            <Row type="flex" justify="center">
              <AllButton
                type="primary"
                size="large"
                bgcolor="#33BA2C!important"
                onClick={accept}
                disabled={`${folio}` !== password}
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

export default Confirm;
