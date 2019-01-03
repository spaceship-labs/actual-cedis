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
    this.handleClickAproveAll = this.handleClickAproveAll.bind(this);
    this.handleClickDeniedAll = this.handleClickDeniedAll.bind(this);
    this.handleClickCAllN = this.handleClickCAllN.bind(this);
    this.handleClickCAllY = this.handleClickCAllY.bind(this);
    this.handleClickDAllN = this.handleClickDAllN.bind(this);
    this.handleClickDAllY = this.handleClickDAllY.bind(this);
    this.handleClickAprove = this.handleClickAprove.bind(this);
    this.handleClickDenied = this.handleClickDenied.bind(this);
    this.handleClickAN = this.handleClickAN.bind(this);
    this.handleClickAY = this.handleClickAY.bind(this);
    this.handleClickDN = this.handleClickDN.bind(this);
    this.handleClickDY = this.handleClickDY.bind(this);
    this.goBack = this.goBack.bind(this);
    this.state = {
      toogleBack: true,
      toogleOption: false,
      toogleConfirmA: false,
      toogleConfirmD: false,
      toogleCAll: false,
      toogleDAll: false,
      autorizado: true,
      rechazado: false,
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

  handleClickAproveAll() {
    this.setState({ toogleCAll: true, toogleOption: false, toogleBack: false });
  }

  handleClickCAllN() {
    this.setState({ toogleCAll: false, toogleOption: false, toogleBack: true });
  }

  handleClickCAllY() {
    this.setState({
      toogleCAll: false,
      autorizado: true,
      toogleBack: true,
      rechazado: false,
    });
  }

  handleClickDeniedAll() {
    this.setState({ toogleDAll: true, toogleOption: false });
  }

  handleClickDAllN() {
    this.setState({ toogleDAll: false, toogleOption: false, toogleBack: true });
  }

  handleClickDAllY() {
    this.setState({
      toogleDAll: false,
      rechazado: true,
      toogleBack: true,
      autorizado: false,
    });
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
    // const objeto1 = {
    //   description: { id: 1, value: 'Mueble Negro' },
    //   code: '12345',
    //   color: 'black',
    //   quantity: 3,
    //   delivery: '11/12/2018',
    //   price: '$1,500.00 MXN',
    //   visible: true,
    // };

    // const objeto2 = {
    //   description: { id: 2, value: 'Mueble Blanco' },
    //   code: '67890',
    //   color: 'white',
    //   quantity: 2,
    //   delivery: '18/12/2018',
    //   price: '$2,500.00 MXN',
    //   visible: true,
    // };

    const data = [
      {
        description: { id: 1, value: 'Mueble Blanco' },
        code: '67890',
        color: 'white',
        quantity: 2,
        delivery: '11/12/2018',
        price: '$1,500.00 MXN',
        visible: true,
      },
      {
        description: { id: 2, value: 'Mueble Negro' },
        code: '12345',
        color: 'black',
        quantity: 3,
        delivery: '18/12/2018',
        price: '$2,500.00 MXN',
        visible: true,
      },
      {
        description: { id: 3, value: 'Mueble Azul' },
        code: '13579',
        color: 'blue',
        quantity: 5,
        delivery: '21/12/2018',
        price: '$3,500.00 MXN',
        visible: true,
      },
      {
        description: { id: 4, value: 'Mueble Dorado' },
        code: '7587969',
        color: 'dorado',
        quantity: 2,
        delivery: '25/12/2018',
        price: '$5,500.00 MXN',
        visible: true,
      },
    ];

    const {
      toogleBack,
      toogleOption,
      toogleConfirmA,
      toogleConfirmD,
      autorizado,
      rechazado,
      toogleCAll,
      toogleDAll,
    } = this.state;

    return (
      <LayoutContentWrapper style={{ height: 'auto' }}>
        <LayoutContent>
          <CancelContent
            data={data}
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
            handleClickAproveAll={this.handleClickAproveAll}
            handleClickDeniedAll={this.handleClickDeniedAll}
            toogleCAll={toogleCAll}
            toogleDAll={toogleDAll}
            handleClickCAllY={this.handleClickCAllY}
            handleClickCAllN={this.handleClickCAllN}
            handleClickDAllY={this.handleClickDAllY}
            handleClickDAllN={this.handleClickDAllN}
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
