import React from 'react';
import { Modal } from 'antd';

const AlertDialog = (tittle, message) => {
  Modal.info({
    title: tittle,
    content: (
      <div>
        <p>{message}</p>
      </div>
    ),
    onOk() {},
  });
};

export default AlertDialog;
