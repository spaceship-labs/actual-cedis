import React from 'react';
import { Row, Col } from 'antd';
import {
  StatusP,
  StatusH3,
  ColEnd,
  StatusContent,
  StatusIcon,
} from '../CancelRequest.style';
import Checkout from '../../../image/svgs/checkout-ticket.svg';

const HeaderRow = () => (
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
          <Row type="flex">
            <Col>
              <StatusP
                weight="bold"
                align="right"
                margin="0px 0px 28px 0px"
                transform="uppercase"
              >
                Articulo
              </StatusP>
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
            </Col>
          </Col>
        </Row>
      </Col>
      <Col md={4} lg={4}>
        <Col>
          <StatusP
            weight="bold"
            align="right"
            margin="0px 0px 28px 0px"
            transform="uppercase"
          >
            Acciones
          </StatusP>
        </Col>
      </Col>
    </Row>
  </StatusContent>
);

export default HeaderRow;
