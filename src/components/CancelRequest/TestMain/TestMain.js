import React from 'react';
import { Row, Col } from 'antd';
import {
  StatusH3,
  StatusP,
  ColCenter,
  ColEnd,
  StatusContent,
  StatusIcon,
} from '../CancelRequest.style';

import TestOption from './TestOption';
import TestRegresar from './TestRegresar/TestRegresar';
import Checkout from '../../../image/svgs/checkout-ticket.svg';

const Item = ({ object }) => <StatusH3 weight="bolder">{object}</StatusH3>;

Item.defaultProps = {
  description: 'Aqui va el producto',
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
    {object.shipDate}
  </StatusP>
);

Entrega.defaultProps = {
  delivery: 'Aqui va la fecha de entrega',
};

const Precio = ({ object }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {object.total}
  </StatusP>
);

Precio.defaultProps = {
  price: 'Aqui va el precio',
};

const TestMain = ({
  detail,
  cancelDetail,
  accept,
  reject,
  unSet,
  options,
  requestStatus,
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
            <Item object={null} />
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
                <Cantidad object={cancelDetail} />
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
                <Entrega object={detail} />
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
                <Precio object={cancelDetail} />
              </Col>
            </Col>
          </Row>
        </Col>
        <Col md={4} lg={4}>
          {requestStatus === 'pending' ? (
            <ColCenter>
              {!options ? (
                <TestOption
                  handleClickAprove={accept}
                  handleClickDenied={reject}
                />
              ) : (
                <TestRegresar clickCb={unSet} />
              )}
            </ColCenter>
          ) : null}
        </Col>
      </Row>
    </StatusContent>
  </div>
);

export default TestMain;
