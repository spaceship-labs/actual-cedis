import React from 'react';
import { Row, Button } from 'antd';
import { StatusPop, StatusH3, ItemCol } from './CancelRequest.style';

const TestRequestConfirmAprove = ({ toogle, handleClickAY, handleClickAN }) => {
  const isToogled = toogle;
  const AY = handleClickAY;
  const AN = handleClickAN;
  if (isToogled) {
    return (
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
          </Row>
          <Row type="flex" justify="center">
            <Row type="flex" justify="center">
              <Button type="danger" size="large" onClick={AN}>
                Cancelar
              </Button>
            </Row>
            <Row type="flex" justify="center">
              <Button type="primary" size="large" onClick={AY}>
                Aceptar
              </Button>
            </Row>
          </Row>
        </ItemCol>
      </StatusPop>
    );
  }
  return null;
};

export default TestRequestConfirmAprove;
