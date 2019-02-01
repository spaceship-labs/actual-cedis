import React, { Component } from 'react';
import { Input, Modal, Row } from 'antd';
import {
  ReasonCancel,
  CursorPointer,
  SubmitMsj,
} from '../../containers/Order/single.style';

class MotivoCancelacion extends Component {
  constructor(props) {
    super(props);
    this.showpopup = this.showpopup.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleverify = this.handleverify.bind(this);
    this.state = {
      visible: false,
      disable: false,
    };
  }

  showpopup = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    const { handleverify } = this;
    this.setState({
      visible: false,
    });
    const { verifyData } = this.props;
    const verify = verifyData();
    if (verify) handleverify();
  };

  handleverify = () => {
    this.setState({
      disable: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const textarea = Input;
    const { visible, disable } = this.state;
    const { cancelReason, reason } = this.props;
    return (
      <div>
        <Row>
          <ReasonCancel>
            <p>
              <strong>MOTIVO DE CANCELACIÓN: </strong>
            </p>
            <div>
              <div>
                <textarea row={8} onChange={cancelReason} value={reason} />
              </div>
              {disable ? (
                <SubmitMsj>
                  <p>ENVIAR SOLICITUD DE CANCELACIÓN</p>
                </SubmitMsj>
              ) : (
                <SubmitMsj>
                  <CursorPointer>
                    <p onClick={this.showpopup}>
                      ENVIAR SOLICITUD DE CANCELACIÓN
                    </p>
                  </CursorPointer>
                </SubmitMsj>
              )}
              <Modal
                visible={visible}
                onCancel={this.handleCancel}
                onOk={this.handleOk}
                title="Confirmación"
              >
                <p>
                  ¿Estás seguro de querer enviar la solicitud de cancelación?
                </p>
              </Modal>
            </div>
          </ReasonCancel>
        </Row>
      </div>
    );
  }
}

export default MotivoCancelacion;
