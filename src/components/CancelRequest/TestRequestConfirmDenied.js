import React from 'react';
import { Row, Button } from 'antd';
import { StatusPop, StatusH3, ItemCol } from './CancelRequest.style';

const TestRequestConfirmDenied = ({ toogle, handleClickDY, handleClickDN }) => {
  const isToogled = toogle;
  const DY = handleClickDY;
  const DN = handleClickDN;
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
              ¿Esta seguro que desea rechazar la siguiente operación?
            </StatusH3>
          </Row>
          <Row type="flex" justify="center">
            <Row type="flex" justify="center">
              <Button type="danger" size="large" onClick={DN}>
                Cancelar
              </Button>
            </Row>
            <Row type="flex" justify="center">
              <Button type="primary" size="large" onClick={DY}>
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

export default TestRequestConfirmDenied;
