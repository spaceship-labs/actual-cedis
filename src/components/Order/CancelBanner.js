import React from 'react';

const CancelBanner = () => (
  <CancelBanner>
    <p>
      <strong>ESTATUS DE CANCELACIONES </strong>
      <span onClick={this.showpopup}>#{data.VALOR}</span>
      <span className="click">
        {' '}
        HAZ CLICK SOBRE LA ORDEN PARA VER LOS DETALLER
      </span>
    </p>
    <Modal
      visible={this.state.visible}
      onCancel={this.handleCancel}
      footer={null}
    >
      <p className="title-cnl">
        <strong>DETALLE DE CANCELACIONES</strong> <span>#{data.VALOR}</span>
      </p>
      <Row>
        <Col span={12}>
          <p>SKU: 123456789</p>
          <p>Cantidad: 123456789</p>
        </Col>
        <Col span={12}>
          <StateClr stclr={stclr2}>
            {stclr2 === 'auth' ? 'Autorizado' : 'No Autorizado'}
          </StateClr>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <p>SKU: 123456789</p>
          <p>Cantidad: 123456789</p>
        </Col>
        <Col span={12}>
          <StateClr stclr={stclr1}>
            {stclr1 === 'auth' ? 'Autorizado' : 'No Autorizado'}
          </StateClr>
        </Col>
      </Row>
    </Modal>
  </CancelBanner>
);
