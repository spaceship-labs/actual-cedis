import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import clone from 'clone';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
// import { antiBind } from '../../helpers/utils';
import actions from './actions';
import { antiBind } from '../../helpers/utils';
import LayoutContentWrapper from '../../components/utility/layoutWrapper';
import LayoutContent from '../../components/utility/layoutContent';
// import RequestContent from '../../components/CancelRequest/RequestContent';
import {
  StatusBar,
  StatusIcon,
  StatusSpan,
  StatusH3,
  StatusP,
} from './CancelRequest.styled';
import Trash from '../../image/favicon.png';
import selectors from './selectors';
import {
  RequestContent,
  RequestIcon,
  RequestSpan,
  RequestH3,
  RequestP,
} from './request.style';
import RequestConfirmAprove from './RequestConfirmAprove';
import RequestConfirmDenied from './RequestConfirmDenied';
import Option from './Option';
import Regresar from './Regresar';

const Item = ({ description }) => (
  <RequestH3 weight="bolder">{description}</RequestH3>
);

Item.defaultProps = {
  description: 'Aqui va el producto',
};

const Codigo = ({ code }) => (
  <RequestP weight="bolder">
    Codigo: <RequestSpan weight="lighter">{code}</RequestSpan>
  </RequestP>
);

Codigo.defaultProps = {
  code: 'Aqui va el codigo',
};

const Color = ({ color }) => (
  <RequestP weight="bolder">
    Color: <RequestSpan weight="lighter">{color}</RequestSpan>
  </RequestP>
);

Color.defaultProps = {
  color: 'Aqui va el color',
};

const Cantidad = ({ quantity = '' }) => (
  <RequestP weight="normal" align="right" margin="0px">
    {quantity}
  </RequestP>
);

// Cantidad.defaultProps = {
//   quantity: 'Aqui va la cantidad'
// };

const Entrega = ({ delivery }) => (
  <RequestP weight="normal" align="right" margin="0px">
    {delivery}
  </RequestP>
);

Entrega.defaultProps = {
  delivery: 'Aqui va la fecha de entrega',
};

const Precio = ({ price }) => (
  <RequestP weight="normal" align="right" margin="0px">
    {price}
  </RequestP>
);

Precio.defaultProps = {
  price: 'Aqui va el precio',
};
class CancelRequest extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.answerRequest = this.answerRequest.bind(this);
    this.unsetAnswer = this.unsetAnswer.bind(this);
    this.setRequestStatus = this.setRequestStatus.bind(this);
    this.allButton = this.allButton.bind(this);
    this.showDialog = this.showDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
    this.acceptCb = this.acceptCb.bind(this);
    this.rejectCb = this.rejectCb.bind(this);
    this.state = {
      firstLoad: true,
      answers: {},
      requestStatus: 'partially',
    };
    this.getText = this.getText.bind(this);
  }

  componentDidMount() {
    const {
      getCancelRequest,
      match: {
        params: { id },
      },
    } = this.props;
    getCancelRequest(id);
  }

  componentWillReceiveProps(nextProps) {
    const { firstLoad } = this.state;
    if (firstLoad) {
      // if (Object.keys(nextProps.request).lenght > 0)
      this.setState({ firstLoad: false });
    }
  }

  getText(cancelDetail) {
    const {
      request: { Details, products },
    } = this.props;
    const det = Details[cancelDetail.Detail];

    return `${products[det.Product].ItemCode} - ${
      products[det.Product].ItemName
    }`;
  }

  answerRequest(e, id, answer) {
    const { answers } = this.state;
    this.setState({
      answers: { ...answers, [id]: answer ? 'authorized' : 'rejected' },
      requestStatus: 'partially',
    });
  }

  unsetAnswer(e, id) {
    const { answers } = this.state;
    const cloned = clone(answers);
    if (cloned[id]) {
      delete cloned[id];
    }
    this.setState({ answers: { ...cloned } });
  }

  handleClick() {
    this.setState({});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({});
  }

  setRequestStatus(val) {
    this.setState({ requestStatus: val });
  }

  allButton(e, val) {
    this.setRequestStatus(val);
    const { showConfirmDialog } = this.props;
    showConfirmDialog();
  }

  showDialog() {
    const { showConfirmDialog } = this.props;
    showConfirmDialog();
  }

  hideDialog() {
    const { hideConfirmDialog } = this.props;
    hideConfirmDialog();
  }

  acceptCb() {
    const { requestStatus, answers } = this.state;
    const {
      match: {
        params: { id },
      },
      updateCancelRequest,
    } = this.props;
    if (requestStatus === 'partially' && Object.keys(answers).length === 0) {
      alert('No se detectaron cambios');
    } else {
      updateCancelRequest({ answers, requestStatus, id });
    }
  }

  rejectCb() {
    this.hideDialog();
    this.setRequestStatus('partially');
  }

  render() {
    const { firstLoad, answers } = this.state;
    if (firstLoad) return null;
    // array de prueba
    const arr = ['holi', 1234, 2, 'blue', '21/dic/2018', '$4500 MXN'];
    const [description, code, quantity, color, delivery, price] = arr;
    const {
      request: {
        reason,
        Details: requestDetails,
        CancelationDetails: cancelDetails,
      },
      confirmDialog,
    } = this.props;
    return (
      <LayoutContentWrapper style={{ height: 'auto' }}>
        <LayoutContent>
          <StatusBar>
            <div className="solicitud-bar">
              <Row type="flex" justify="start" className="solicitud-bar-item">
                <Col className="flex center trash-logo" span={2}>
                  <StatusIcon
                    src={Trash}
                    alt="trash"
                    width="30px"
                    height="36px"
                    margin="2px 0px"
                  />
                </Col>
                <Col className="status-text" md={14} lg={16}>
                  <StatusSpan weight="bold" transform="uppercase">
                    Solicitud de la cancelación
                  </StatusSpan>
                  {/* <StatusSpan
                    weight="light"
                    transform="uppercase"
                    padding="0px 0px 0px 10px"
                  >
                    Ninguna solicitud pendiente
                  </StatusSpan> */}
                </Col>
                <Col className="buttons flex around" md={8} lg={6}>
                  <div className="flex column center">
                    <Button
                      type="primary"
                      size="small"
                      onClick={antiBind(this.allButton, 'authorized')}
                    >
                      Autorizar todo
                    </Button>
                  </div>
                  <div className="flex column center">
                    <Button
                      type="danger"
                      size="small"
                      onClick={antiBind(this.allButton, 'rejected')}
                    >
                      Rechazar todo
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="order-text-block">
              <StatusH3 transform="uppercase" weight="bolder">
                Motivo de la cancelación:
              </StatusH3>
              <StatusP align="justify">{reason}</StatusP>
              <hr />
            </div>
            <RequestContent>
              <Row type="flex">
                <RequestIcon
                  src={Trash}
                  alt="trash"
                  width="20px"
                  height="20px"
                  margin="0px 10px 0px 0px"
                />
                <RequestH3 transform="uppercase" weight="bolder">
                  Articulos Adquiridos
                </RequestH3>
              </Row>
              <Row>
                <Col md={24} lg={24}>
                  <Row>
                    <Col span={9}>
                      <div className="flex column">
                        <RequestP
                          weight="bold"
                          align="right"
                          margin="0px 0px 28px 0px"
                          transform="uppercase"
                        >
                          Articulo
                        </RequestP>
                      </div>
                    </Col>
                    <Col span={3}>
                      <div className="flex column">
                        <RequestP
                          weight="bold"
                          align="right"
                          margin="0px 0px 28px 0px"
                          transform="uppercase"
                        >
                          En Orden
                        </RequestP>
                      </div>
                    </Col>
                    <Col span={3}>
                      <div className="flex column">
                        <RequestP
                          weight="bold"
                          align="right"
                          margin="0px 0px 28px 0px"
                          transform="uppercase"
                        >
                          A Cancelar
                        </RequestP>
                      </div>
                    </Col>
                    <Col span={5}>
                      <div className="flex column">
                        <RequestP
                          weight="bold"
                          align="right"
                          margin="0px 0px 28px 0px"
                          transform="uppercase"
                        >
                          Entrega aproximada
                        </RequestP>
                      </div>
                    </Col>
                    <Col span={4}>
                      <div className="flex column">
                        <RequestP
                          weight="bold"
                          align="right"
                          margin="0px 0px 28px 0px"
                          transform="uppercase"
                        >
                          Acciones
                        </RequestP>
                      </div>
                    </Col>
                  </Row>
                  {cancelDetails.map((item, index) => (
                    <Row>
                      <Col span={9}>
                        <div className="flex column">
                          <Cantidad quantity={this.getText(item)} />
                        </div>
                      </Col>
                      <Col span={3}>
                        <div className="flex column">
                          <Cantidad
                            quantity={requestDetails[item.Detail].quantity}
                          />
                        </div>
                      </Col>
                      <Col span={3}>
                        <div className="flex column">
                          <Cantidad quantity={item.quantity} />
                        </div>
                      </Col>
                      <Col span={5}>
                        <div className="flex column">
                          <Entrega
                            delivery={moment(
                              requestDetails[item.Detail].shipDate
                            ).format('DD/MM/YYYY')}
                          />
                        </div>
                      </Col>
                      <Col className="buttons flex around" span={4}>
                        {!answers[item.id] ? (
                          [
                            <div className="flex column center">
                              <Button
                                type="primary"
                                size="small"
                                onClick={antiBind(
                                  this.answerRequest,
                                  item.id,
                                  true
                                )}
                              >
                                Autorizar
                              </Button>
                            </div>,
                            <div className="flex column center">
                              <Button
                                type="danger"
                                size="small"
                                onClick={antiBind(
                                  this.answerRequest,
                                  item.id,
                                  false
                                )}
                              >
                                Rechazar
                              </Button>
                            </div>,
                          ]
                        ) : (
                          <div className="flex column center">
                            <Button
                              type="primary"
                              size="small"
                              onClick={antiBind(this.unsetAnswer, item.id)}
                            >
                              Regresar
                            </Button>
                          </div>
                        )}
                      </Col>
                    </Row>
                  ))}
                </Col>
              </Row>
              <RequestConfirmAprove
                toggle={confirmDialog}
                handleClickAY={this.acceptCb}
                handleClickAN={this.rejectCb}
              />
            </RequestContent>
            <div className="cambios-bar">
              <Row type="flex" className="status-bar-item" justify="end">
                <Button
                  className="primary"
                  style={{
                    width: 'auto',
                    padding: '0 20px',
                    margin: '0 20px 0 0',
                  }}
                  onClick={this.showDialog}
                >
                  <strong>GUARDAR CAMBIOS</strong>
                </Button>
              </Row>
            </div>
          </StatusBar>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  const {
    addAccepted,
    addRejected,
    removeAccepted,
    removeRejected,
    getCancelRequest,
    updateCancelRequest,
    setStatus,
    showConfirmDialog,
    hideConfirmDialog,
  } = actions;

  return bindActionCreators(
    {
      addAccepted,
      addRejected,
      removeAccepted,
      removeRejected,
      setStatus,
      updateCancelRequest,
      getCancelRequest,
      showConfirmDialog,
      hideConfirmDialog,
    },
    dispatch
  );
};

export default connect(
  selectors.propsSelector,
  mapDispatchToProps
)(CancelRequest);
