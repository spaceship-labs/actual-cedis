import React from 'react';
import TableList from '../TableList';

const OrdersView = props => {
  const {
    getOrders,
    filterOrders,
    pagination,
    loading,
    orders,
    columns,
    rowKey,
    filter,
    keyword,
    category,
  } = props;
  // if (!loading)
  //   return (
  //     <div>
  //       <h3>Hola Mundo</h3>
  //     </div>
  //   );
  const searchfunction = filter ? filterOrders : getOrders;
  console.log('datos del componente', filter, keyword, category);
  return (
    <div>
      <h3>Pedidos</h3>
      <TableList
        onChangeData={searchfunction}
        rowKey={rowKey}
        pagination={pagination}
        loading={loading}
        entries={orders}
        columns={columns}
        keyword={keyword}
        category={category}
      />
    </div>
  );
};

export default OrdersView;
