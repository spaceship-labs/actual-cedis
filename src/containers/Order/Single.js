import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Container,
  Seccion,
  OrderItems,
  OrderPago,
  OrderEnvio,
  Sap,
  Asesor,
  CancelBanner,
  RowItem,
  ReasonCancel,
  Modal,
  TxtStrong,
  TxtData,
} from './single.style';
import { Row, Col, Icon, Select, Input } from 'antd';
import { getOrder } from './actions';
import selector from './selectors';
// import Title from 'antd/lib/skeleton/Avatar';
import OrderModal from './../../components/SingleOrder/modal';
import { modaldata, dataorder } from './fakeData';
import CnlActiv from './../../components/SingleOrder/cnlAct';
// import antiBind from './../../components/services/utils';
class OrderSingle extends Component {
  constructor(props) {
    super(props);
    this.showpopup = this.showpopup.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.state = {
      visible: false,
      showCancel: false,
    };
  }

  showpopup = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    console.log('modal data', modaldata);
    const data = {
      VALOR: '017588',
      name: 'Fernando Marquez',
      E_Mail: 'yupit@spaceshiplabs.com',
      Store_name: 'yupitslabs',
    };
    const Option = Select.Option;
    const textarea = Input;

    return (
      <Container>
        <CancelBanner>
          <TxtStrong>
            ESTATUS DE CANCELACIONES{' '}
            <TxtData onClick={this.showpopup}>#{data.VALOR}</TxtData> HAZ CLICK
            SOBRE LA ORDEN PARA VER LOS DETALLES
          </TxtStrong>
          <Modal
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
          >
            <OrderModal modaldata={modaldata} order={data.VALOR} />
          </Modal>
        </CancelBanner>
        <Seccion>
          <CnlActiv />
        </Seccion>
        <Seccion>
          <h3>
            <strong>
              <i class="icon-checkout-ticket" /> ARTÍCULOS ADQUIRIDOS
            </strong>
          </h3>
          <OrderItems>
            <div>
              <Row>
                <Col span={this.state.showCancel ? 4 : 6}>Articulo</Col>
                <Col span={this.state.showCancel ? 4 : 5}>CANTIDAD</Col>
                <Col span={this.state.showCancel ? 6 : 7}>
                  ENTREGA APROXIMADA
                </Col>
                <Col span={this.state.showCancel ? 4 : 5}>PRECIO</Col>
                {this.state.showCancel && <Col span={3} />}
                {this.state.showCancel && <Col span={3} />}
              </Row>
              <RowItem>
                <Col span={this.state.showCancel ? 4 : 6}>h</Col>
                <Col span={this.state.showCancel ? 4 : 5}>1</Col>
                <Col span={this.state.showCancel ? 6 : 7}>21/oct/2018</Col>
                <Col span={this.state.showCancel ? 4 : 5}>$3,0025</Col>
                {this.state.showCancel && (
                  <Col className="Delete-items trash" span={3}>
                    <Icon type="delete" />
                    <p>CANCELAR ARTICULO</p>
                  </Col>
                )}
                {this.state.showCancel && (
                  <Col className="Delete-items" span={3}>
                    <Select defaultValue="Option1-1">
                      <Option value="Option1-1">1</Option>
                      <Option value="Option1-2">2</Option>
                    </Select>
                    <p>PIEZAS A CANCELAR</p>
                  </Col>
                )}
              </RowItem>
            </div>
          </OrderItems>
        </Seccion>
        <Seccion>
          {this.state.showCancel && (
            <ReasonCancel>
              <p>
                <strong>MOTIVO DE CANCELACION: </strong>
              </p>
              <div className="area-cancel">
                <div className="input-tex-area">
                  <textarea row={8} />
                </div>
                <div className="btn-send-arrow">
                  <Icon type="right" />
                  <p>ENVIAR SOLICITUD DE CANCELACION</p>
                </div>
              </div>
            </ReasonCancel>
          )}
          <h3>
            <strong>
              <i class="icon-metodo-pago" /> PAGOS
            </strong>
          </h3>
          <OrderPago>
            <div>
              <div>
                <div>
                  <strong>FORMA DE PAGO</strong>
                </div>
                <Row>
                  <Col span={4}>FORMA DE PAGO</Col>
                  <Col span={4}>FECHA</Col>
                  <Col span={4}>FOLIO</Col>
                  <Col span={4}>TIPO DE PAGO</Col>
                  <Col span={4}>TERMINAL</Col>
                  <Col span={4}>MONTO COBRADO</Col>
                </Row>
                <Row className="venta">
                  <Col span={16}>
                    <p className="taxes">
                      *Todos los montos incluyen impuestos
                    </p>
                  </Col>
                  <Col span={4}>
                    <p>
                      <strong>SUBTOTAL COMPRA:</strong>
                    </p>
                    <p>
                      <strong>DESCUENTOS COMPRA:</strong>
                    </p>
                    <p>
                      <strong>TOTAL COMPRA:</strong>
                    </p>
                    <p>
                      <strong>TOTAL PAGADO:</strong>
                    </p>
                    <p>
                      <strong>SALDO:</strong>
                    </p>
                    <br />
                    <p>
                      <strong>SALDO CLIENTE:</strong>
                    </p>
                  </Col>
                  <Col span={4}>
                    <p>
                      <strong>$</strong>
                    </p>
                    <p>
                      <strong>$</strong>
                    </p>
                    <p>
                      <strong>$</strong>
                    </p>
                    <p>
                      <strong>$</strong>
                    </p>
                    <p>
                      <strong>$</strong>
                    </p>
                    <br />
                    <p>
                      <strong>$</strong>
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </OrderPago>
        </Seccion>
        <Seccion>
          <h3>
            <strong>Documentos SAP</strong>
          </h3>
          <Sap>
            <ul>
              <li>
                <p>
                  <strong>Factura de deudores SAP</strong>:{' '}
                </p>
                <p>
                  <strong>Pagos</strong>:
                </p>
                <ul>
                  <li>1015059</li>
                </ul>
              </li>
            </ul>
          </Sap>
        </Seccion>
        <Seccion>
          <h3>
            <strong>
              <i class="icon-envio" /> ENVÍO
            </strong>
          </h3>
          <OrderEnvio>
            <div>
              <div>
                <Row>
                  <Col span={12}>
                    <p>
                      <strong>Email: </strong>{' '}
                    </p>
                    <p>
                      <strong>Télefono: </strong>{' '}
                    </p>
                    <p>
                      <strong>Celular: </strong>{' '}
                    </p>
                    <p>
                      <strong>Calle: </strong>{' '}
                    </p>
                    <p>
                      <strong>No. exterior: </strong>{' '}
                    </p>
                    <p>
                      <strong>No. interior: </strong>{' '}
                    </p>
                    <p>
                      <strong>Colonia: </strong>{' '}
                    </p>
                  </Col>
                  <Col span={12}>
                    <p>
                      <strong>Municipio: </strong>
                    </p>
                    <p>
                      <strong>Ciudad: </strong>
                    </p>
                    <p>
                      <strong>Estado: </strong>
                    </p>
                    <p>
                      <strong>C.P.: </strong>
                    </p>
                    <p>
                      <strong>Entre calle: </strong>
                    </p>
                    <p>
                      <strong>Y calle: </strong>
                    </p>
                    <p>
                      <strong>Referencias: </strong>
                    </p>
                  </Col>
                </Row>
                <p>
                  El personal de entrega le estará contactando vía telefónica en
                  varias ocasiones:
                </p>
                <ul>
                  <li>
                    <strong>Coordinación de la fecha de entrega:</strong> En los
                    siguientes 24 horas hábiles después de la compra.
                  </li>
                  <li>
                    <strong>Coordinación de la hora de entrega:</strong> Mínimo
                    24 horas antes de la entrega.
                  </li>
                  <li>
                    <strong>Aviso de la llegada de la unidad de entrega</strong>{' '}
                    1 hora antes de la entrega
                  </li>
                </ul>
              </div>
            </div>
          </OrderEnvio>
        </Seccion>
        <Seccion>
          <h3>
            <strong>
              <i class="icon-vendedor" /> ASESOR DE INTERIORES
            </strong>
          </h3>
          <Asesor>
            <div>
              <p>
                <strong>Nombre: </strong>
              </p>
              <p>
                <strong>Teléfono: </strong>
              </p>
              <p>
                <strong>Celular: </strong>
              </p>
              <p>
                <strong>Email:</strong>
              </p>
            </div>
          </Asesor>
        </Seccion>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getOrder }, dispatch);

export default connect(
  selector,
  mapDispatchToProps
)(OrderSingle);
