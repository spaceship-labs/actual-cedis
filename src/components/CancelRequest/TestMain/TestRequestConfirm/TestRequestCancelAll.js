import React from 'react';
import { Row } from 'antd';
import {
  StatusPop,
  StatusH3,
  ItemCol,
  AllButton,
} from '../../CancelRequest.style';

const TestRequestCancelAll = ({
  toogle,
  handleClickDAllY,
  handleClickDAllN,
}) => {
  const isToogled = toogle;
  const HDY = handleClickDAllY;
  const HDN = handleClickDAllN;
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
              ¿Esta seguro que desea rechazar todo?
            </StatusH3>
          </Row>
          <Row type="flex" justify="center">
            <Row type="flex" justify="center">
              <AllButton
                onClick={HDN}
                type="danger"
                size="large"
                color="white!important"
                transform="uppercase"
                bgcolor="#C82828!important"
                font="10px!important"
              >
                Cancelar
              </AllButton>
            </Row>
            <Row type="flex" justify="center">
              <AllButton
                onClick={HDY}
                type="primary"
                size="large"
                color="white!important"
                transform="uppercase"
                bgcolor="#33BA2C!important"
                font="10px!important"
              >
                Aceptar
              </AllButton>
            </Row>
          </Row>
        </ItemCol>
      </StatusPop>
    );
  }
  return null;
};

export default TestRequestCancelAll;
