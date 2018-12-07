import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
import RequestContent from '../../components/requestList/RequestContent';
import {
  StatusBar,
  StatusIcon,
  StatusSpan,
  StatusH3,
  StatusP,
} from './requestList.style';
import Trash from '../../image/favicon.png';

export default class extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {};
  }

  handleClick() {
    this.setState({});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({});
  }

  render() {
    // array de prueba
    const arr = ['holi', 1234, 2, 'blue', '21/dic/2018', '$4500 MXN'];
    return (
      <LayoutContentWrapper style={{ height: 'auto' }}>
        <LayoutContent>
          <StatusBar>
            <div className="solicitud-bar">
              <Row type="flex" justify="start" className="solicitud-bar-item">
                <Col className="flex center trash-logo" span={2}>
                  <StatusIcon
                    src={Trash}
                    alt="trash"
                    width="30px"
                    height="36px"
                    margin="2px 0px"
                  />
                </Col>
                <Col className="status-text" md={14} lg={16}>
                  <StatusSpan weight="bold" transform="uppercase">
                    Solicitud de la cancelación
                  </StatusSpan>
                  <StatusSpan
                    weight="light"
                    transform="uppercase"
                    padding="0px 0px 0px 10px"
                  >
                    Ninguna solicitud pendiente
                  </StatusSpan>
                </Col>
                <Col className="buttons flex around" md={8} lg={6}>
                  <div className="flex column center">
                    <Button type="primary" size="small">
                      Autorizar todo
                    </Button>
                  </div>
                  <div className="flex column center">
                    <Button type="danger" size="small">
                      Rechazar todo
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="order-text-block">
              <StatusH3 transform="uppercase" weight="bolder">
                Motivo de la cancelación:
              </StatusH3>
              <StatusP align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </StatusP>
            </div>
            {/* Componente capaz de recibir un objeto, cuyos valores recibe 
            como props y hace render en el contenedor de solicitud de cancelación,
            devuelve el estado de cancelación ya sea autorizado o rechazado segun se elija */}
            <RequestContent
              description={arr[0]}
              code={arr[1]}
              quantity={arr[2]}
              color={arr[3]}
              delivery={arr[4]}
              price={arr[5]}
            />
            <div className="cambios-bar">
              <Row type="flex" className="status-bar-item" justify="end">
                <Button
                  className="primary"
                  style={{
                    width: 'auto',
                    padding: '0 20px',
                    margin: '0 20px 0 0',
                  }}
                >
                  <strong>GUARDAR CAMBIOS</strong>
                </Button>
              </Row>
            </div>
          </StatusBar>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
