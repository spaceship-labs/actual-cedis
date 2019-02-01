import React, { Component } from 'react';
import { Modal } from 'antd';
import {
  TxtStrong,
  CancelAll,
  CursorPointer,
} from '../../containers/Order/single.style';

class CancelAllButton extends Component {
  constructor(props) {
    super(props);
    this.showpopup = this.showpopup.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.state = {
      visible: false,
    };
  }

  showpopup = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
    const { cancelAllOrder } = this.props;
    cancelAllOrder();
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { showCancel, cancelAll } = this.props;
    const { visible } = this.state;
    return (
      <div>
        {showCancel && (
          <CursorPointer>
            <CancelAll onClick={this.showpopup}>
              <TxtStrong>
                {cancelAll
                  ? 'CANCELAR POR ARTÍCULOS'
                  : 'CANCELAR TODA LA ORDEN'}
              </TxtStrong>
            </CancelAll>
            <Modal
              visible={visible}
              onCancel={this.handleCancel}
              onOk={this.handleOk}
              title="Cancelar orden"
            >
              <p>
                {' '}
                {cancelAll
                  ? '¿Seguro que quieres cancelar por artículos?'
                  : '¿Seguro que quieres cancelar toda la orden?'}
              </p>
              <p>
                Para poder proceder con la solicitud de cancelación
                exitosamente, deberá llenar el cuadro que se encuentra al final
                de esta página: <strong>Motivo de cancelación.</strong> (Mínimo
                una línea de texto)
              </p>
            </Modal>
          </CursorPointer>
        )}
      </div>
    );
  }
}

export default CancelAllButton;
