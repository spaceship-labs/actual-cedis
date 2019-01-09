import React, { Component } from 'react';
import { connect } from 'react-redux';
import columns from './columns';
import { containerSelector } from './selectors';
import dispatcher from './dispatcher';
import OrdersViewStyled from '../../components/OrdersView';

class OrdersView extends Component {
  componentDidMount() {
    const { getOrders } = this.props;
    getOrders();
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

export default connect(
  containerSelector,
  dispatcher
)(OrdersView);
