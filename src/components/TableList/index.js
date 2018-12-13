import React from 'react';
import TableWrapper from './antTable.style';

const TableView = ({ pagination, columns, loading, onChange, entries }) => (
  <TableWrapper
    pagination={pagination}
    columns={columns}
    loading={loading}
    onChange={onChange}
    dataSource={entries}
    className="isoSortingTable"
  />
);
export default TableView;
