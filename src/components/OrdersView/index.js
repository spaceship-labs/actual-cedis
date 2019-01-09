import React from 'react';
import TableList from '../TableList';

const OrdersView = props => {
  const { getOrders, pagination, loading, orders, columns, rowKey } = props;
  // if (!loading)
  //   return (
  //     <div>
  //       <h3>Hola Mundo</h3>
  //     </div>
  //   );
  return (
    <div>
      <h3>Pedidos</h3>
      <TableList
        onChange={getOrders}
        rowKey={rowKey}
        pagination={pagination}
        loading={loading}
        entries={orders}
        columns={columns}
      />
    </div>
  );
};

export default OrdersView;
