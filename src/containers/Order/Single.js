import React, { Component } from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Icon, Select, Input } from 'antd';
import {
  Container,
  Seccion,
  Order,
  OrderTextBlock,
  OrderItems,
  OrderPago,
  OrderEnvio,
  Sap,
  Asesor,
  CancelBanner,
  RowItem,
  ReasonCancel,
  Modal,
  StateClr,
} from './single.style';
import AntButton from '../../components/uielements/button';
import { getOrder, createCancelRequest } from './actions';
import selector from './selectors';
import { antiBind } from '../../components/services/utils';

const { Option } = Select;

class OrderSingle extends Component {
  constructor(props) {
    super(props);
    this.showpopup = this.showpopup.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.stateCancel = this.stateCancel.bind(this);
    this.handleItemNumber = this.handleItemNumber.bind(this);
    this.handleReason = this.handleReason.bind(this);
    this.handleArticleCancel = this.handleArticleCancel.bind(this);
    this.acceptCallback = this.acceptCallback.bind(this);
    this.state = {
      visible: false,
      showCancel: false,
      firstLoad: true,
      cancels: {},
      reason: '',
      cancelAll: false,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      getOrder,
    } = this.props;
    getOrder(id);
  }

  componentWillReceiveProps(nextProps) {
    const { firstLoad } = this.state;
    if (nextProps.order && firstLoad) {
      this.setState({ firstLoad: false });
    }
  }

  acceptCallback() {
    const { createCancelRequest } = this.props;
    const { cancels, cancelAll, reason } = this.state;
    if (reason) {
      const details = Object.keys(cancels).reduce((acc, item) => {
        acc.push(cancels[item]);
        return acc;
      }, []);
      const {
        match: {
          params: { id: orderId },
        },
      } = this.props;
      const payload = cancelAll ? { cancelAll } : { details };
      createCancelRequest({ orderId, ...payload });
    } else {
      alert('Porfavor indique el motivo de la cancelacion');
    }
  }

  handleAllCancel() {
    this.setState({ cancelAll: true });
    this.showpopup();
  }

  handleItemNumber(e, index) {
    const { name, value } = e.target;
    const {
      order: { Details: productos },
    } = this.props;
    const { quantity } = productos[index];
    const { cancels } = this.state;
    const val = Number(value) > -1 ? Number(value) : 0;
    this.setState({
      cancels: { ...cancels, [name]: val > quantity ? quantity : val },
    });
  }

  handleReason(e) {
    const {
      target: { value },
    } = e;
    this.setState({ reason: value });
  }

  handleArticleCancel() {
    // console.log('Entra al handle');
    const { reason, cancels: details } = this.state;
    const detailsKeys = Object.keys(details).length;
    if (detailsKeys === 0) {
      this.setState({ cancelAll: true });
    }
    this.showpopup();
  }

  stateCancel() {
    const { showCancel } = this.state;
    this.setState({
      showCancel: !showCancel,
    });
  }

  showpopup() {
    this.setState({
      visible: true,
    });
  }

  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const { firstLoad, reason, cancels } = this.state;
    if (firstLoad) return null;
    console.log(this.props);
    const {
      order: {
        folio,
        createdAt,
        CardName: cardName,
        Client: { E_Mail: email },
        Store: { name: storeName },
        Details: productos,
        Payments: pagos,
        subtotal,
        discount,
        total: totalCompra,
        ammountPaid,
        Broker,
      },
    } = this.props;
    return (
      <Container>
        <CancelBanner>
          <Modal
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
          >
            <p className="title-cnl">
              <strong>DETALLE DE CANCELACIONES</strong> <span>#{folio}</span>
            </p>
            <Row>
              <Col>
                <p>
                  Porfavor, confirme que desea enviar la solicitud de
                  cancelacion.
                </p>
              </Col>
            </Row>
            <Row style={{ border: '0' }}>
              <Col span={6}>
                <AntButton onClick={this.acceptCallback}>Aceptar</AntButton>
              </Col>
              <Col span={6}>
                <AntButton onClick={this.handleCancel}>Cancelar</AntButton>
              </Col>
            </Row>
          </Modal>
        </CancelBanner>
        <Seccion>
          <Order>
            <Row>
              <Col span={8}>
                <h3>
                  NUMERO DE ORDEN <span>{`#${folio}`}</span>
                </h3>
              </Col>
              <Col span={3}>{moment(createdAt).format('DD/MM/YYYY')}</Col>
              <Col span={5}>
                <AntButton>IMPRIMIR RECIBO</AntButton>
              </Col>
              <Col span={6}>
                <AntButton onClick={this.stateCancel} className="Btn-cancel">
                  CREAR SOLICITUD DE CANCELACION
                </AntButton>
              </Col>
            </Row>
            <OrderTextBlock>
              <h3>
                <strong>¡GRACIAS POR SU COMPRA!</strong>
              </h3>
              <p>
                Estimado<strong>{` ${cardName}`}</strong>
              </p>
              <p>
                Su compra ha sido procesada y en breve estará recibiendo su
                confirmación al correo electrónico
                <strong>{` ${email}`}</strong>
              </p>

              <p>
                <strong>Tienda: </strong>
                {` ${storeName}`}
              </p>
              {this.state.showCancel && (
                <p className="cancelAll">
                  <strong>CANCELAR TODA LA ORDEN</strong>
                </p>
              )}
            </OrderTextBlock>
          </Order>
        </Seccion>
        <Seccion>
          <h3>
            <strong>
              <i className="icon-checkout-ticket" /> ARTÍCULOS ADQUIRIDOS
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
              {productos.map((item, index) => (
                <RowItem key={item.id}>
                  <Col span={this.state.showCancel ? 4 : 6}>{item.Product}</Col>
                  <Col span={this.state.showCancel ? 4 : 5}>
                    {item.quantity}
                  </Col>
                  <Col span={this.state.showCancel ? 6 : 7}>
                    {moment(item.shipDate).format('DD/MM/YYYY')}
                  </Col>
                  <Col span={this.state.showCancel ? 4 : 5}>
                    {numeral(item.total).format('$0,0.00')}
                  </Col>
                  {this.state.showCancel && (
                    <Col className="Delete-items" span={3}>
                      <Input
                        type="number"
                        name={item.id}
                        value={cancels[item.id]}
                        onChange={antiBind(this.handleItemNumber, index)}
                      />
                      <p>PIEZAS A CANCELAR</p>
                    </Col>
                  )}
                </RowItem>
              ))}
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
                  <textarea
                    row={8}
                    onChange={this.handleReason}
                    value={reason}
                  />
                </div>
                <div
                  className="btn-send-arrow"
                  onClick={this.handleArticleCancel}
                >
                  <Icon type="right" />
                  <p>ENVIAR SOLICITUD DE CANCELACION</p>
                </div>
              </div>
            </ReasonCancel>
          )}
          <h3>
            <strong>
              <i className="icon-metodo-pago" /> PAGOS
            </strong>
          </h3>
          <OrderPago>
            <div className="order-block-inner">
              <div
                className="order-table-header"
                layout="row"
                layout-align="space-between start"
              >
                <div flex className="pull-left">
                  <p>
                    <strong>FORMA DE PAGO</strong>
                  </p>
                  <p className="taxes">*Todos los montos incluyen impuestos</p>
                </div>
                <Row>
                  <Col span={4}>FORMA DE PAGO</Col>
                  <Col span={4}>FECHA</Col>
                  <Col span={4}>FOLIO</Col>
                  <Col span={4}>TIPO DE PAGO</Col>
                  <Col span={4}>TERMINAL</Col>
                  <Col span={4}>MONTO COBRADO</Col>
                </Row>
                {pagos.map((item, index) => (
                  <Row key={item.id}>
                    <Col span={4}>{item.name}</Col>
                    <Col span={4}>{moment(createdAt).format('DD/MM/YYYY')}</Col>
                    <Col span={4}>{item.folio}</Col>
                    <Col span={4}>{item.type}</Col>
                    <Col span={4}>{item.type}</Col>
                    <Col span={4}>
                      {numeral(item.ammount).format('$0,0.00')}
                    </Col>
                  </Row>
                ))}
                <Row className="venta">
                  {/* <Col span={16} /> */}
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
                      {subtotal}
                    </p>
                    <p>
                      <strong>$</strong>
                      {discount}
                    </p>
                    <p>
                      <strong>$</strong>
                      {totalCompra}
                    </p>
                    <p>
                      <strong>$</strong>
                      {ammountPaid}
                    </p>
                    <p>
                      <strong>$</strong>
                      {totalCompra - ammountPaid}
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
              <li ng-repeat="orderSap in vm.order.OrdersSap">
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
              <i className="icon-envio" /> ENVÍO
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
        {Broker && (
          <Seccion>
            <h3>
              <strong>
                <i className="icon-vendedor" /> ASESOR DE INTERIORES
              </strong>
            </h3>
            <Asesor>
              <div className="order-block-inner">
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
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getOrder, createCancelRequest }, dispatch);

export default connect(
  selector,
  mapDispatchToProps
)(OrderSingle);
