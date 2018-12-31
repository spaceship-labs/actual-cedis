import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  addAccepted,
  addRejected,
  removeAccepted,
  removeRejected,
  getCancelRequest,
  updateCancelRequest,
  setStatus,
} from './actions';
import LayoutContentWrapper from '../../../components/utility/layoutWrapper';
import LayoutContent from '../../../components/utility/layoutContent';
import CancelContent from '../../../components/CancelRequest/CancelContent';
import { propsSelector } from './selectors';

class CancelRequest extends Component {
  constructor(props) {
    super(props);
    this.handleClickAprove = this.handleClickAprove.bind(this);
    this.handleClickDenied = this.handleClickDenied.bind(this);
    this.handleClickAN = this.handleClickAN.bind(this);
    this.handleClickAY = this.handleClickAY.bind(this);
    this.handleClickDN = this.handleClickDN.bind(this);
    this.handleClickDY = this.handleClickDY.bind(this);
    this.goBack = this.goBack.bind(this);
    this.state = {
      toogleBack: false,
      toogleOption: true,
      toogleConfirmA: false,
      toogleConfirmD: false,
      autorizado: null,
      rechazado: null,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    getCancelRequest(id);
  }

  handleClickAprove() {
    this.setState({ toogleConfirmA: true, toogleOption: false });
  }

  handleClickAN() {
    this.setState({ toogleConfirmA: false, toogleOption: true });
  }

  handleClickAY() {
    this.setState({
      autorizado: true,
      toogleConfirmA: false,
      toogleOption: false,
      toogleBack: true,
    });
  }

  handleClickDenied() {
    this.setState({ toogleConfirmD: true, toogleOption: false });
  }

  handleClickDN() {
    this.setState({ toogleConfirmD: false, toogleOption: true });
  }

  handleClickDY() {
    this.setState({
      rechazado: true,
      toogleConfirmD: false,
      toogleOption: false,
      toogleBack: true,
    });
  }

  goBack() {
    this.setState({
      toogleOption: true,
      toogleBack: false,
      rechazado: false,
      autorizado: false,
    });
  }

  render() {
    const objeto = {
      description: { id: 1, value: 'Mueble Blanco' },
      code: 'lyoco',
      color: 'red',
      quantity: 2,
      delivery: '11/12/2018',
      price: '$1,500.00 MXN',
      visible: true,
    };

    const {
      toogleBack,
      toogleOption,
      toogleConfirmA,
      toogleConfirmD,
      autorizado,
      rechazado,
    } = this.state;

    return (
      <LayoutContentWrapper style={{ height: 'auto' }}>
        <LayoutContent>
          <CancelContent
            object={objeto}
            toogleOption={toogleOption}
            handleClickAprove={this.handleClickAprove}
            handleClickDenied={this.handleClickDenied}
            toogleBack={toogleBack}
            autorizado={autorizado}
            rechazado={rechazado}
            goBack={this.goBack}
            toogleConfirmA={toogleConfirmA}
            handleClickAN={this.handleClickAN}
            handleClickAY={this.handleClickAY}
            toogleConfirmD={toogleConfirmD}
            handleClickDN={this.handleClickDN}
            handleClickDY={this.handleClickDY}
          />
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addAccepted,
      addRejected,
      removeAccepted,
      removeRejected,
      setStatus,
      updateCancelRequest,
      getCancelRequest,
    },
    dispatch
  );

export default connect(
  propsSelector,
  mapDispatchToProps
)(CancelRequest);
