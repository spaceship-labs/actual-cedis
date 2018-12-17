import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import columns from './columns';
import { containerSelector } from './selectors';
import { changePage, getCancelRequests } from './actions';
import CancelRequestsListStyled from '../../components/CancelRequestsList';

class CancelRequestsList extends Component {
  componentDidMount() {
    const { getCancelRequests } = this.props; // eslint-disable-line
    getCancelRequests();
  }

  render() {
    const { pagination, changePage } = this.props; // eslint-disable-line
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ changePage, getCancelRequests }, dispatch);

export default connect(
  containerSelector,
  mapDispatchToProps
)(CancelRequestsList);
