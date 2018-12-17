import React from 'react';
import TableList from '../TableList';

const AlertsList = props => {
  const { getAlerts, pagination, loading, alerts, columns, rowKey } = props;
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
        onChange={getAlerts}
        rowKey={rowKey}
        pagination={pagination}
        loading={loading}
        entries={alerts}
        columns={columns}
      />
    </div>
  );
};

export default AlertsList;
