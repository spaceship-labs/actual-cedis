import React from 'react';
import { Row, Col } from 'antd';
import Numeral from 'numeral';
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
import TestAutorizado from './TestRegresar/TestAutorizado';
import TestCancelado from './TestRegresar/TestCancelado';

const DateCell = data => {
  const date = new Date(data);
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: 'numeric',
  };
  return (
    <StatusP weight="normal" align="right" margin="0px">
      {date.toLocaleString('en-US', options)}
    </StatusP>
  );
};

const Item = cancelRequest => (
  <StatusH3 weight="bolder">
    {cancelRequest === undefined ? <div>Hola</div> : <div>error loading</div>}
  </StatusH3>
);

const Cantidad = ({ detail: { quantity } }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {quantity}
  </StatusP>
);

Cantidad.defaultProps = {
  quantity: 'Aqui va la cantidad',
};

const Entrega = ({ object }) => <div>{DateCell(object.shipDate)}</div>;

Entrega.defaultProps = {
  shipDate: 'Aqui va la fecha de entrega',
};

const Precio = ({ object }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {Numeral(object.total).format('$0,0.00')}
  </StatusP>
);

Precio.defaultProps = {
  object: 'Aqui va el precio',
};

const TestMain = ({
  product,
  detail,
  accept,
  reject,
  unSet,
  options,
  requestStatus,
  answer,
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
            <Item product={product} />
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
                <Cantidad detail={detail} />
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
                {/* <Entrega detail={detail} /> */}
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
                {/* <Precio detail={detail} /> */}
              </Col>
            </Col>
          </Row>
        </Col>
        <Col md={4} lg={4}>
          {requestStatus === 'pending' ? (
            <ColCenter>
              {options ? (
                <TestOption
                  handleClickAprove={accept}
                  handleClickDenied={reject}
                />
              ) : (
                <div>
                  <TestRegresar clickCb={unSet} />
                  {answer === 'authorized' ? (
                    <TestAutorizado />
                  ) : (
                    <TestCancelado />
                  )}
                </div>
              )}
            </ColCenter>
          ) : null}
        </Col>
      </Row>
    </StatusContent>
  </div>
);

export default TestMain;
