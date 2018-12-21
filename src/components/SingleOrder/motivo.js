import React from 'react';
import { Icon, Input } from 'antd';
import {
  ReasonCancel,
  CursorPointer,
  SubmitMsj,
} from '../../containers/Order/single.style';

const textarea = Input;
const MotivoCancelacion = () => (
  <div>
    <ReasonCancel>
      <p>
        <strong>MOTIVO DE CANCELACION: </strong>
      </p>
      <div>
        <div>
          <textarea row={8} />
        </div>
        <SubmitMsj>
          <Icon type="right" />
          <CursorPointer>
            <p>ENVIAR SOLICITUD DE CANCELACION</p>
          </CursorPointer>
        </SubmitMsj>
      </div>
    </ReasonCancel>
  </div>
);

export default MotivoCancelacion;
