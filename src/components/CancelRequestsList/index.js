import React from 'react';
import TableList from '../TableList';

const CancelRequestsList = props => {
  const {
    getCancelRequests,
    filterCancel,
    pagination,
    loading,
    cancelRequests,
    columns,
    rowKey,
    keyword,
    category,
  } = props;
  // if (!loading)
  //   return (
  //     <div>
  //       <h3>Hola Mundo</h3>
  //     </div>
  //   );
  const searchfunction = keyword.length > 0 ? filterCancel : getCancelRequests;

  return (
    <div>
      <h3>Pedidos</h3>
      <TableList
        onChangeData={searchfunction}
        rowKey={rowKey}
        pagination={pagination}
        loading={loading}
        entries={cancelRequests}
        columns={columns}
        keyword={keyword}
        category={category}
      />
    </div>
  );
};

export default CancelRequestsList;
