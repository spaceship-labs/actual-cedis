import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import columns from './columns';
import { containerSelector } from './selectors';
import actions from './actions';
import OrdersViewStyled from '../../components/OrdersView';

class OrdersView extends Component {
  componentDidMount() {
    const { getOrders, page } = this.props;
    getOrders(page);
  }

  render() {
    const { pagination, changePage } = this.props;
    const newProps = {
      ...this.props,
      pagination: { ...pagination, onChange: changePage },
    };
    return (
      <OrdersViewStyled
        {...newProps}
        columns={columns}
        rowKey={item => `orden-${item.id}-view`}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  const { changePage, getOrders } = actions;
  return bindActionCreators({ changePage, getOrders }, dispatch);
};

export default connect(
  containerSelector,
  mapDispatchToProps
)(OrdersView);
