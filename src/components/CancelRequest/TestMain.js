import React from 'react';
import { Row, Col } from 'antd';
import {
  StatusH3,
  StatusP,
  StatusSpan,
  ColCenter,
  ColEnd,
  StatusContent,
  RequestIcon,
  StatusIcon,
} from './CancelRequest.style';
import TestRequestConfirmAprove from './TestRequestConfirmAprove';
import TestRequestConfirmDenied from './TestRequestConfirmDenied';
import TestOption from './TestOption';
import TestRegresar from './TestRegresar';
import Checkout from '../../image/svgs/checkout-ticket.svg';

const Item = ({ object }) => (
  <StatusH3 weight="bolder">{object.description.value}</StatusH3>
);

Item.defaultProps = {
  description: 'Aqui va el producto',
};

const Codigo = ({ object }) => (
  <StatusP weight="bolder">
    Codigo: <StatusSpan weight="lighter">{object.code}</StatusSpan>
  </StatusP>
);

Codigo.defaultProps = {
  code: 'Aqui va el codigo',
};

const Color = ({ object }) => (
  <StatusP weight="bolder">
    Color: <StatusSpan weight="lighter">{object.color}</StatusSpan>
  </StatusP>
);

Color.defaultProps = {
  color: 'Aqui va el color',
};

const Cantidad = ({ object }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {object.quantity}
  </StatusP>
);

Cantidad.defaultProps = {
  quantity: 'Aqui va la cantidad',
};

const Entrega = ({ object }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {object.delivery}
  </StatusP>
);

Entrega.defaultProps = {
  delivery: 'Aqui va la fecha de entrega',
};

const Precio = ({ object }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {object.price}
  </StatusP>
);

Precio.defaultProps = {
  price: 'Aqui va el precio',
};

const TestMain = ({
  object,
  toogleOption,
  handleClickAprove,
  handleClickDenied,
  toogleBack,
  autorizado,
  rechazado,
  goBack,
  toogleConfirmA,
  handleClickAN,
  handleClickAY,
  toogleConfirmD,
  handleClickDN,
  handleClickDY,
}) => (
  <div>
    <StatusContent>
      <hr />
      <Row type="flex">
        <StatusIcon
          src={Checkout}
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
          <ColEnd>
            <Item object={object} />
            <Row type="flex">
              <RequestIcon
                type="file-unknown"
                width="30px"
                height="30px"
                font="25px"
                margin="0px 5px"
              />
              <Col>
                <Codigo object={object} />
                <Color object={object} />
              </Col>
            </Row>
          </ColEnd>
        </Col>
        <Col md={14} lg={10}>
          <Row>
            <Col span={5}>
              <Col>
                <StatusP
                  weight="bold"
                  align="right"
                  margin="0px 0px 28px 0px"
                  transform="uppercase"
                >
                  Cantidad
                </StatusP>
                <Cantidad object={object} />
              </Col>
            </Col>
            <Col span={11}>
              <Col>
                <StatusP
                  weight="bold"
                  align="right"
                  margin="0px 0px 28px 0px"
                  transform="uppercase"
                >
                  Entrega aproximada
                </StatusP>
                <Entrega object={object} />
              </Col>
            </Col>
            <Col span={8}>
              <Col>
                <StatusP
                  weight="bold"
                  align="right"
                  margin="0px 0px 28px 0px"
                  transform="uppercase"
                >
                  Precio
                </StatusP>
                <Precio object={object} />
              </Col>
            </Col>
          </Row>
        </Col>
        <Col md={4} lg={4}>
          <ColCenter height="100px!important">
            <TestOption
              toogle={toogleOption}
              handleClickAprove={handleClickAprove}
              handleClickDenied={handleClickDenied}
            />
            <TestRegresar
              toogle={toogleBack}
              autorizado={autorizado}
              rechazado={rechazado}
              goBack={goBack}
            />
          </ColCenter>
        </Col>
      </Row>
    </StatusContent>
    <TestRequestConfirmAprove
      toogle={toogleConfirmA}
      handleClickAN={handleClickAN}
      handleClickAY={handleClickAY}
    />
    <TestRequestConfirmDenied
      toogle={toogleConfirmD}
      handleClickDN={handleClickDN}
      handleClickDY={handleClickDY}
    />
  </div>
);

export default TestMain;
