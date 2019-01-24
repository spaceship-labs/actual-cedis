import React from 'react';
import { Row, Col } from 'antd';
import {
  StatusP,
  StatusH3,
  ColEnd,
  StatusContent,
  ColCenter,
} from '../CancelRequest.style';
import TestOption from './TestOption';
import TestRegresar from './TestRegresar/TestRegresar';

const Item = ({ object }) => <StatusH3 weight="bolder">{object}</StatusH3>;

Item.defaultProps = {
  description: 'Aqui va el producto',
};

const Cantidad = ({ object }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {object}
  </StatusP>
);

Cantidad.defaultProps = {
  quantity: 'Aqui va la cantidad',
};

const Entrega = ({ object }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {object}
  </StatusP>
);

Entrega.defaultProps = {
  delivery: 'Aqui va la fecha de entrega',
};

const Precio = ({ object }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {object}
  </StatusP>
);

Precio.defaultProps = {
  price: 'Aqui va el precio',
};

const ArticleRow = ({
  product,
  // detail,
  cancelDetail,
  accept,
  reject,
  unSet,
  options,
  requestStatus,
}) => (
  <StatusContent>
    <Row>
      <Col md={6} lg={10}>
        <ColEnd>
          <Item object={product.Name} />
        </ColEnd>
      </Col>
      <Col md={14} lg={10}>
        <Row>
          <Col span={5}>
            <Col>
              <Cantidad object={cancelDetail.quantity} />
            </Col>
          </Col>
          <Col span={11}>
            <Col>{/* <Entrega object={detail.shipDate} /> */}</Col>
          </Col>
          <Col span={8}>
            <Col>
              <Precio object={cancelDetail.total} />
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
);

export default ArticleRow;
