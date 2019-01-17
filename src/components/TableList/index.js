import React from 'react';
import TableWrapper from './antTable.style';

const TableView = ({
  pagination,
  columns,
  loading,
  onChangeData,
  entries,
  keyword,
  category,
}) => {
  const Search = () => {
    console.log(onChangeData);
    console.log('datos de la funcion', keyword, category);
    onChangeData(keyword, category);
  };
  return (
    <TableWrapper
      pagination={pagination}
      columns={columns}
      loading={loading}
      onChange={Search}
      dataSource={entries}
      className="isoSortingTable"
    />
  );
};
export default TableView;
