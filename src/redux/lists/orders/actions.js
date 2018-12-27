import { createActions } from 'ractionx';

const prefix = '@actual/cedis/lists/Orders';

const types = [
  'GET_ORDERS',
  'SET_ORDERS',
  'CHANGE_PAGE',
  'SET_PAGE',
  'SET_TOTAL',
];

const { getOrders, setOrders, changePage, setPage, setTotal } = createActions(
  prefix,
  types
);

export default { getOrders, setOrders, changePage, setPage, setTotal };
