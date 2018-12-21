import React from 'react';
import {
  TxtStrong,
  CancelAll,
  CursorPointer,
} from '../../containers/Order/single.style';

const CancelAllButton = ({ showCancel }) => (
  <div>
    {showCancel && (
      <CursorPointer>
        <TxtStrong>
          <CancelAll>CANCELAR TODA LA ORDEN</CancelAll>
        </TxtStrong>
      </CursorPointer>
    )}
  </div>
);
export default CancelAllButton;
