import React, { Component } from 'react';
import { Row } from 'antd';
import {
  Order,
  OrderTextBlock,
  BtnPrint,
  BtnCancel,
  TxtStrong,
  TxtData,
  CancelAll,
  ColBtn,
} from '../../containers/Order/single.style';

class CnlActiv extends Component {
  constructor(props) {
    super(props);
    this.stateCancel = this.stateCancel.bind(this);
    this.state = {
      showCancel: false,
    };
  }
  componentDidMount() {}

  stateCancel = () => {
    const { showCancel } = this.state;
    this.setState({
      showCancel: !showCancel,
    });
  };
  render() {
    const data = {
      folio: '017588',
      name: 'Fernando Marquez',
      E_Mail: 'yupit@spaceshiplabs.com',
      Store_name: 'yupitslabs',
    };
    const { showCancel } = this.state;
    return (
      <div>
        <Order>
          <Row gutter={16}>
            <ColBtn xs={12} sm={12} md={12} lg={7} xl={7}>
              <h3>
                NUMERO DE ORDEN <TxtData>#{data.folio}</TxtData>
              </h3>
            </ColBtn>
            <ColBtn xs={12} sm={12} md={12} lg={3} xl={3}>
              <span>22/nov/2018</span>
            </ColBtn>
            <ColBtn xs={12} sm={12} md={12} lg={5} xl={5}>
              <BtnPrint type="primary">IMPRIMIR RECIBO</BtnPrint>
            </ColBtn>
            <ColBtn xs={12} sm={12} md={12} lg={9} xl={9}>
              <BtnCancel type="primary" onClick={this.stateCancel}>
                CREAR SOLICITUD DE CANCELACION
              </BtnCancel>
            </ColBtn>
          </Row>
          <OrderTextBlock>
            <h3>
              <strong>¡GRACIAS POR SU COMPRA!</strong>
            </h3>
            <p>
              Estimado<strong> {data.name}</strong>
            </p>
            <p>
              Su compra ha sido procesada y en breve estará recibiendo su
              confirmación al correo electrónico
              <strong> {data.E_Mail}</strong>
            </p>

            <p>
              <strong>Tienda: </strong> {data.Store_name}
            </p>
            {showCancel && (
              <TxtStrong>
                <CancelAll>CANCELAR TODA LA ORDEN</CancelAll>
              </TxtStrong>
            )}
          </OrderTextBlock>
        </Order>
      </div>
    );
  }
}

export default CnlActiv;
