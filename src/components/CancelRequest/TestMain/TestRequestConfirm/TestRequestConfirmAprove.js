import React from 'react';
import { Row } from 'antd';
import {
  StatusPop,
  StatusH3,
  ItemCol,
  AllButton,
} from '../../CancelRequest.style';

const TestRequestConfirmAprove = ({ show, cancelCb }) =>
  show ? (
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
            <AllButton
              type="danger"
              size="large"
              color="white!important"
              transform="uppercase"
              bgcolor="#C82828!important"
              font="10px!important"
              onClick={cancelCb}
            >
              Cancelar
            </AllButton>
          </Row>
          <Row type="flex" justify="center">
            <AllButton
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
  ) : null;
// }
// return null;
export default TestRequestConfirmAprove;
