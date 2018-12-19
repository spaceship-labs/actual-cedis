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
  SendText,
  // JOE
  StatusContent,
  StatusH3,
  StatusP,
  StatusSpan,
  StatusInput,
  StatusRow,
  ColEnd,
  RequestIcon,
  ColCenter,
} from './single.style';
import AntButton from '../../components/uielements/button';
import { getOrder, createCancelRequest, showPopUp, hidePopUp } from './actions';
import selector from './selectors';
import { antiBind } from '../../helpers/utils';

const { Option } = Select;

const Item = ({ item }) => <StatusH3 weight="bolder">{item}</StatusH3>;

Item.defaultProps = {
  description: 'Aqui va el producto',
};

const Codigo = ({ codigo }) => (
  <StatusP weight="bolder">
    Codigo: <StatusSpan weight="lighter">{codigo}</StatusSpan>
  </StatusP>
);

Codigo.defaultProps = {
  code: 'Aqui va el codigo',
};

const Color = ({ color }) => (
  <StatusP weight="bolder">
    Color: <StatusSpan weight="lighter">{color}</StatusSpan>
  </StatusP>
);

Color.defaultProps = {
  color: 'Aqui va el color',
};

const Cantidad = ({ quantity }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {quantity}
  </StatusP>
);

Cantidad.defaultProps = {
  quantity: 'Aqui va la cantidad',
};

const Entrega = ({ delivery }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {delivery}
  </StatusP>
);

Entrega.defaultProps = {
  delivery: 'Aqui va la fecha de entrega',
};

const Precio = ({ price }) => (
  <StatusP weight="normal" align="right" margin="0px">
    {price}
  </StatusP>
);

Precio.defaultProps = {
  price: 'Aqui va el precio',
};

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
        acc.push({ id: item, quantity: cancels[item] });
        return acc;
      }, []);
      const {
        match: {
          params: { id: orderId },
        },
      } = this.props;
      const payload = { cancelAll, details, reason };
      createCancelRequest({ orderId, ...payload });
    } else {
      alert('Porfavor indique el motivo de la cancelacion');
      const { hidePopUp: hide } = this.props;
      hide();
    }
  }

  handleAllCancel() {
    this.setState({ cancelAll: true });
    const { showPopUp: show } = this.props;
    show();
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
    console.log('llama 2');
    const { showPopUp: show } = this.props;
    show();
  }

  stateCancel() {
    const { showCancel } = this.state;
    this.setState({
      showCancel: !showCancel,
    });
  }

  showpopup() {
    console.log('llama 3');
    const { showPopUp: show } = this.props;
    show();
  }

  handleCancel(e) {
    console.log(e);
    console.log('llama 4');
    const { hidePopUp: hide } = this.props;
    hide();
  }

  render() {
    const object = {
      description: { id: 1, value: 'holi' },
      code: 23455,
      colo: 'red',
      quantity: 4,
      delivery: '21/08/11',
      price: '$45,000.00 MXN',
    };
    const { firstLoad, reason, cancels } = this.state;
    if (firstLoad) return null;
    console.log(this.props);
    const {
      order: {
        folio,
        createdAt,
        CardName: cardName,
        Client: { E_Mail: email, Balance: balance },
        // Store: { name: storeName },
        Details: productos,
        Payments: pagos,
        subtotal,
        discount,
        total: totalCompra,
        ammountPaid,
        Broker,
        E_Mail: deliveryEmail,
        Tel1: deliveryTel,
        Cellolar: deliveryCellphone,
        // address: deliveryAddress,
        U_Noexterior: deliveryExterior,
        U_Nointerior: deliveryInterior,
        U_Colonia: deliveryColonia,
        U_Mpio: deliveryMunicipio,
        U_Ciudad: deliveryCudad,
        U_Estado: deliveryEstado,
        U_CP: deliveryCP,
        U_Entrecalle: deliveryEntrecalle,
        U_Ycalle: deliveryYcalle,
        U_Notes1: deliveryNotes,
        OrdersSap: sapOrders,
      },
      products,
      showPopUpFlag: visible,
    } = this.props;
    const { order } = this.props;
    const storeName = order.Store ? order.Store.name : '';
    const { address: deliveryAddress = '' } = order;
    return (
      <Container>
        {/* <CancelBanner>
          <Modal visible={visible} onCancel={this.handleCancel} footer={null}>
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
        </CancelBanner> */}
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
        <div>
          <StatusContent>
            {productos.map((item, index) => (
              <div>
                <Row type="flex">
                  <i className="icon-checkout-ticket" />
                  <StatusH3 transform="uppercase" weight="bolder">
                    Articulos Adquiridos
                  </StatusH3>
                </Row>
                <RowItem key={item.id}>
                  <Col
                    md={this.state.showCancel ? 6 : 12}
                    lg={this.state.showCancel ? 10 : 12}
                  >
                    <ColEnd>
                      <Item item={products[item.Product].name} />
                      <Row type="flex">
                        <RequestIcon
                          type="file-unknown"
                          width="30px"
                          height="30px"
                          font="25px"
                          margin="0px 5px"
                        />
                        <Col>
                          <Codigo codigo={products[item.Product].code} />
                          <Color />
                        </Col>
                      </Row>
                    </ColEnd>
                  </Col>
                  <Col
                    md={this.state.showCancel ? 14 : 11}
                    lg={this.state.showCancel ? 10 : 12}
                  >
                    <Row>
                      <Col span={5}>
                        <Col>
                          <StatusP
                            weight="bold"
                            align="right"
                            margin="0px 0px 28px 0px"
                            transform="uppercase"
                          >
                            Cantidad
                          </StatusP>
                          <Cantidad quantity={item.quantity} />
                        </Col>
                      </Col>
                      <Col span={11}>
                        <Col>
                          <StatusP
                            weight="bold"
                            align="right"
                            margin="0px 0px 28px 0px"
                            transform="uppercase"
                          >
                            Entrega aproximada
                          </StatusP>
                          <Entrega
                            delivery={moment(item.shipDate).format(
                              'DD/MM/YYYY'
                            )}
                          />
                        </Col>
                      </Col>
                      <Col span={8}>
                        <Col>
                          <StatusP
                            weight="bold"
                            align="right"
                            margin="0px 0px 28px 0px"
                            transform="uppercase"
                          >
                            Precio
                          </StatusP>
                          <Precio
                            price={numeral(item.total).format('$0,0.00')}
                          />
                        </Col>
                      </Col>
                    </Row>
                  </Col>
                  <Col
                    md={this.state.showCancel ? 4 : 1}
                    lg={this.state.showCancel ? 4 : 1}
                  >
                    {this.state.showCancel && (
                      <ColCenter height="100px!important">
                        <Row type="flex" justify="center">
                          <StatusInput
                            type="number"
                            name={item.id}
                            value={cancels[item.id]}
                            onChange={antiBind(this.handleItemNumber, index)}
                            width="60px!important"
                          />
                          <StatusP
                            color="red"
                            transform="uppercase"
                            margin="0px"
                            align="center"
                          >
                            Piezas a cancelar
                          </StatusP>
                        </Row>
                      </ColCenter>
                    )}
                  </Col>
                </RowItem>
              </div>
            ))}
          </StatusContent>
        </div>
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
                  <SendText>ENVIAR SOLICITUD DE CANCELACION</SendText>
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
                <StatusRow padding="10px 15px">
                  <Col span={4}>FORMA DE PAGO</Col>
                  <Col span={4}>FECHA</Col>
                  <Col span={4}>FOLIO</Col>
                  <Col span={4}>TIPO DE PAGO</Col>
                  <Col span={4}>TERMINAL</Col>
                  <Col span={4}>MONTO COBRADO</Col>
                </StatusRow>
                {pagos.map((item, index) => (
                  <StatusRow padding="0px 15px" key={item.id}>
                    <Col span={4}>{item.name}</Col>
                    <Col span={4}>{moment(createdAt).format('DD/MM/YYYY')}</Col>
                    <Col span={4}>{item.folio}</Col>
                    <Col span={4}>{item.type}</Col>
                    <Col span={4}>{item.type}</Col>
                    <Col span={4}>
                      {numeral(item.ammount).format('$0,0.00')}
                    </Col>
                  </StatusRow>
                ))}
                {/* <Col span={16} /> */}
                <StatusRow
                  type="flex"
                  justify="end"
                  padding="10px 15px"
                  bgcolor="#F8F8F8"
                >
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
                      {subtotal.toFixed(2)}
                    </p>
                    <p>
                      <strong>$</strong>
                      {discount.toFixed(2)}
                    </p>
                    <p>
                      <strong>$</strong>
                      {totalCompra.toFixed(2)}
                    </p>
                    <p>
                      <strong>$</strong>
                      {ammountPaid.toFixed(2)}
                    </p>
                    <p>
                      <strong>$</strong>
                      {(totalCompra - ammountPaid).toFixed(2)}
                    </p>
                    <br />
                    <p>
                      <strong>$</strong>
                      {balance.toFixed(2)}
                    </p>
                  </Col>
                </StatusRow>
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
              {sapOrders.map(item => (
                <li>
                  <p>
                    <strong>Orden SAP:</strong> {item.document}
                  </p>
                  <p>
                    <strong>Factura de deudores SAP:</strong>{' '}
                    {`${item.invoiceSap || 'N/A'}`}
                  </p>
                </li>
              ))}
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
                      <strong>Email: </strong>
                      {` ${deliveryEmail}`}
                    </p>
                    <p>
                      <strong>Télefono: </strong>
                      {` ${deliveryTel}`}
                    </p>
                    <p>
                      <strong>Celular: </strong>
                      {` ${deliveryCellphone}`}
                    </p>
                    <p>
                      <strong>Calle: </strong>
                      {` ${deliveryAddress}`}
                    </p>
                    <p>
                      <strong>No. exterior: </strong>
                      {` ${deliveryExterior}`}
                    </p>
                    <p>
                      <strong>No. interior: </strong>
                      {` ${deliveryInterior}`}
                    </p>
                    <p>
                      <strong>Colonia: </strong>
                      {` ${deliveryColonia}`}
                    </p>
                  </Col>
                  <Col span={12}>
                    <p>
                      <strong>Municipio: </strong>
                      {` ${deliveryMunicipio}`}
                    </p>
                    <p>
                      <strong>Ciudad: </strong>
                      {` ${deliveryCudad}`}
                    </p>
                    <p>
                      <strong>Estado: </strong>
                      {` ${deliveryEstado}`}
                    </p>
                    <p>
                      <strong>C.P.: </strong>
                      {` ${deliveryCP}`}
                    </p>
                    <p>
                      <strong>Entre calle: </strong>
                      {` ${deliveryEntrecalle}`}
                    </p>
                    <p>
                      <strong>Y calle: </strong>
                      {` ${deliveryYcalle}`}
                    </p>
                    <p>
                      <strong>Referencias: </strong>
                      {` ${deliveryNotes}`}
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
  bindActionCreators(
    { getOrder, createCancelRequest, showPopUp, hidePopUp },
    dispatch
  );

export default connect(
  selector,
  mapDispatchToProps
)(OrderSingle);
