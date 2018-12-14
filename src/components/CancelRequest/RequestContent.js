import React, { Component } from 'react';
import { Row, Col } from 'antd';
import {
  StatusContent,
  StatusIcon,
  StatusSpan,
  StatusH3,
  StatusP,
} from './CancelRequest.style';
import Trash from '../../image/favicon.png';
import RequestConfirmAprove from './RequestConfirmAprove';
import RequestConfirmDenied from './RequestConfirmDenied';
import Option from './Option';
import Regresar from './Regresar';

const Item = ({ description }) => (
  <StatusH3 weight="bolder">{description.id}</StatusH3>
);

Item.defaultProps = {
  description: 'Aqui va el producto',
};

const Codigo = ({ code }) => (
  <StatusP weight="bolder">
    Codigo: <StatusSpan weight="lighter">{code}</StatusSpan>
  </StatusP>
);

Codigo.defaultProps = {
  code: 'Aqui va el codigo',
};

const Color = ({ color }) => (
  <StatusP weight="bolder">
    Color: <StatusSpan weight="lighter">{color}</StatusSpan>
  </StatusP>
);

Color.defaultProps = {
  color: 'Aqui va el color',
};

const Cantidad = ({ quantity }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {quantity}
  </StatusP>
);

Cantidad.defaultProps = {
  quantity: 'Aqui va la cantidad',
};

const Entrega = ({ delivery }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {delivery}
  </StatusP>
);

Entrega.defaultProps = {
  delivery: 'Aqui va la fecha de entrega',
};

const Precio = ({ price }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {price}
  </StatusP>
);

Precio.defaultProps = {
  price: 'Aqui va el precio',
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.handleClickAprove = this.handleClickAprove.bind(this);
    this.handleClickDenied = this.handleClickDenied.bind(this);
    this.handleClickAN = this.handleClickAN.bind(this);
    this.handleClickAY = this.handleClickAY.bind(this);
    this.handleClickDN = this.handleClickDN.bind(this);
    this.handleClickDY = this.handleClickDY.bind(this);
    this.goBack = this.goBack.bind(this);
    this.state = {
      toogleBack: false,
      toogleOption: true,
      toogleConfirmA: false,
      toogleConfirmD: false,
      autorizado: null,
      rechazado: null,
    };
  }

  handleClickAprove() {
    this.setState({ toogleConfirmA: true });
  }

  handleClickAN() {
    this.setState({ toogleConfirmA: false });
  }

  handleClickAY() {
    this.setState({
      autorizado: true,
      toogleConfirmA: false,
      toogleOption: false,
      toogleBack: true,
    });
  }

  handleClickDenied() {
    this.setState({ toogleConfirmD: true });
  }

  handleClickDN() {
    this.setState({ toogleConfirmD: false });
  }

  handleClickDY() {
    this.setState({
      rechazado: true,
      toogleConfirmD: false,
      toogleOption: false,
      toogleBack: true,
    });
  }

  goBack() {
    this.setState({
      toogleOption: true,
      toogleBack: false,
      rechazado: false,
      autorizado: false,
    });
  }

  render() {
    const { description, code, color, quantity, delivery, price } = this.props;

    const {
      toogleBack,
      toogleOption,
      toogleConfirmA,
      toogleConfirmD,
      autorizado,
      rechazado,
    } = this.state;
    return (
      <div>
        <StatusContent>
          <hr />
          <Row type="flex">
            <StatusIcon
              src={Trash}
              alt="trash"
              width="20px"
              height="20px"
              margin="0px 10px 0px 0px"
            />
            <StatusH3 transform="uppercase" weight="bolder">
              Articulos Adquiridos
            </StatusH3>
          </Row>
          <Row>
            <Col md={6} lg={10}>
              <div className="flex column end">
                <Item description={description} />
                <Row type="flex">
                  <StatusIcon
                    src={Trash}
                    alt="trash"
                    width="20px"
                    height="20px"
                    margin="0px 10px 0px 0px"
                  />
                  <div className="flex column">
                    <Codigo code={code} />
                    <Color color={color} />
                  </div>
                </Row>
              </div>
            </Col>
            <Col md={14} lg={10}>
              <Row>
                <Col span={5}>
                  <div className="flex column">
                    <StatusP
                      weight="bold"
                      align="right"
                      margin="0px 0px 28px 0px"
                      transform="uppercase"
                    >
                      Cantidad
                    </StatusP>
                    <Cantidad quantity={quantity} />
                  </div>
                </Col>
                <Col span={11}>
                  <div className="flex column">
                    <StatusP
                      weight="bold"
                      align="right"
                      margin="0px 0px 28px 0px"
                      transform="uppercase"
                    >
                      Entrega aproximada
                    </StatusP>
                    <Entrega delivery={delivery} />
                  </div>
                </Col>
                <Col span={8}>
                  <div className="flex column">
                    <StatusP
                      weight="bold"
                      align="right"
                      margin="0px 0px 28px 0px"
                      transform="uppercase"
                    >
                      Precio
                    </StatusP>
                    <Precio price={price} />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={4} lg={4}>
              <div className="flex column center height100">
                <Option
                  toogle={toogleOption}
                  handleClickAprove={this.handleClickAprove}
                  handleClickDenied={this.handleClickDenied}
                />
                <Regresar
                  toogle={toogleBack}
                  autorizado={autorizado}
                  rechazado={rechazado}
                  goBack={this.goBack}
                />
              </div>
            </Col>
          </Row>
        </StatusContent>
        <RequestConfirmAprove
          toogle={toogleConfirmA}
          handleClickAN={this.handleClickAN}
          handleClickAY={this.handleClickAY}
        />
        <RequestConfirmDenied
          toogle={toogleConfirmD}
          handleClickDN={this.handleClickDN}
          handleClickDY={this.handleClickDY}
        />
      </div>
    );
  }
}
