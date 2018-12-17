import React from 'react';
import TableList from '../TableList';

const CancelRequestsList = props => {
  const {
    getCancelRequests,
    pagination,
    loading,
    cancelRequests,
    columns,
    rowKey,
  } = props;
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
        onChange={getCancelRequests}
        rowKey={rowKey}
        pagination={pagination}
        loading={loading}
        entries={cancelRequests}
        columns={columns}
      />
    </div>
  );
};

export default CancelRequestsList;
