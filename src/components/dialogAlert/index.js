import React from 'react';
import { Modal } from 'antd';

const AlertDialog = ({ message }) => {
  console.log('dialog alert');
  Modal.info({
    title: 'ERROR',
    content: (
      <div>
        <p>{message}</p>
      </div>
    ),
    onOk() {},
  });
};
export default AlertDialog;
