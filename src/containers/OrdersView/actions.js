import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/OrdersView/';

const types = [
  'CHANGE_PAGE',
  'GET_ORDERS',
  'SET_ORDERS',
  'SET_PAGE',
  'SET_TOTAL',
  'SET_PAGINATION',
];

const {
  changePage,
  getOrders,
  setOrders,
  setPage,
  setTotal,
  setPagination,
} = createActions(prefix, types);

export default {
  changePage,
  getOrders,
  setOrders,
  setPage,
  setTotal,
  setPagination,
};
