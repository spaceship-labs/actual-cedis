import { createActions } from 'ractionx';

const prefix = '@actual/cedis/lists/Orders';

const types = [
  'GET_ORDERS',
  'SET_ORDERS',
  'CHANGE_PAGE',
  'SET_PAGE',
  'SET_TOTAL',
  'FILTER_ORDERS',
];

const {
  getOrders,
  setOrders,
  changePage,
  setPage,
  setTotal,
  filterOrders,
} = createActions(prefix, types);

export default {
  getOrders,
  setOrders,
  changePage,
  setPage,
  setTotal,
  filterOrders,
};
