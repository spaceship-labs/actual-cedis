import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import columns from './columns';
import { containerSelector } from './selectors';
import actions from './actions';
import CancelRequestsListStyled from '../../components/CancelRequestsList';

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
    console.log(this.props);
    return (
      <CancelRequestsListStyled
        {...newProps}
        columns={columns}
        rowKey={item => `orden-${item.id}-view`}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  const { changePage, getCancelRequests } = actions;
  return bindActionCreators({ changePage, getCancelRequests }, dispatch);
};

export default connect(
  containerSelector,
  mapDispatchToProps
)(CancelRequestsList);
