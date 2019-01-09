import React, { Component } from 'react';
import { connect } from 'react-redux';
import columns from './columns';
import { containerSelector } from './selectors';
import CancelRequestsListStyled from '../../components/CancelRequestsList';
import dispatcher from './dispatcher';

class CancelRequestsList extends Component {
  componentDidMount() {
    const { getCancelRequests } = this.props;
    getCancelRequests();
  }

  render() {
    const { pagination, changePage } = this.props;
    const newProps = {
      ...this.props,
      pagination: { ...pagination, onChange: changePage },
    };
    return (
      <CancelRequestsListStyled
        {...newProps}
        columns={columns}
        rowKey={item => `orden-${item.id}-view`}
      />
    );
  }
}

export default connect(
  containerSelector,
  dispatcher
)(CancelRequestsList);
