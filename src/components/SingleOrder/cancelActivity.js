import React, { Component } from 'react';
import { Row } from 'antd';
import moment from 'moment';
import {
  Order,
  // BtnPrint,
  BtnCancel,
  ColBtn,
} from '../../containers/Order/single.style';

class CancelActivity extends Component {
  componentDidMount() {}

  render() {
    const {
      dataorder: { folio, createdAt: date },
      stateCancel,
      showCancel,
    } = this.props;

    return (
      <div>
        <Order>
          <Row gutter={16}>
            <ColBtn xs={12} sm={12} md={12} lg={9} xl={9}>
              <h3>NUMERO DE ORDEN #{folio}</h3>
            </ColBtn>
            <ColBtn xs={12} sm={12} md={12} lg={7} xl={7}>
              <span>{moment(date).format('DD/MM/YYYY')}</span>
            </ColBtn>
            {/* <ColBtn xs={12} sm={12} md={12} lg={5} xl={5}>
              <BtnPrint type="primary">IMPRIMIR RECIBO</BtnPrint>
            </ColBtn> */}
            <ColBtn xs={24} sm={24} md={24} lg={8} xl={8}>
              <BtnCancel type="primary" onClick={stateCancel}>
                {showCancel
                  ? 'CANCELAR SOLICITUD DE CANCELACIÓN'
                  : 'CREAR SOLICITUD DE CANCELACIÓN'}
              </BtnCancel>
            </ColBtn>
          </Row>
        </Order>
      </div>
    );
  }
}

export default CancelActivity;
