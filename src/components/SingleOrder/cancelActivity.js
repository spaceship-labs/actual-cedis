import React, { Component } from 'react';
import { Row } from 'antd';
import {
  Order,
  // BtnPrint,
  BtnCancel,
  TxtData,
  ColBtn,
} from '../../containers/Order/single.style';

class CancelActivity extends Component {
  componentDidMount() {}

  render() {
    const {
      dataorder: { folio },
      stateCancel,
    } = this.props;

    return (
      <div>
        <Order>
          <Row gutter={16}>
            <ColBtn xs={12} sm={12} md={12} lg={9} xl={9}>
              <h3>
                NUMERO DE ORDEN <TxtData>#{folio}</TxtData>
              </h3>
            </ColBtn>
            <ColBtn xs={12} sm={12} md={12} lg={7} xl={7}>
              <span>22/nov/2018</span>
            </ColBtn>
            {/* <ColBtn xs={12} sm={12} md={12} lg={5} xl={5}>
              <BtnPrint type="primary">IMPRIMIR RECIBO</BtnPrint>
            </ColBtn> */}
            <ColBtn xs={24} sm={24} md={24} lg={8} xl={8}>
              <BtnCancel type="primary" onClick={stateCancel}>
                CREAR SOLICITUD DE CANCELACION
              </BtnCancel>
            </ColBtn>
          </Row>
        </Order>
      </div>
    );
  }
}

export default CancelActivity;
