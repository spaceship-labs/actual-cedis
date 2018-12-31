import React, { Component } from 'react';

class CancelRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: {},
      showConfirmDialog: false,
      requestAnswer: 'partially',
    };
  }

  setDialogVisibility = (e, val) => {
    this.setState({ showConfirmDialog: val });
  };

  render() {
    return null;
  }
}

export default CancelRequest;
