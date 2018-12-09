import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/OrdersView/';

const types = [
  'CHANGE_PAGE',
  'GET_ALERTS',
  'SET_ALERTS',
  'SET_PAGE',
  'SET_TOTAL',
  'SET_PAGINATION',
];

const {
  changePage,
  getAlerts,
  setAlerts,
  setPage,
  setTotal,
  setPagination,
} = createActions(prefix, types);

export default {
  changePage,
  getAlerts,
  setAlerts,
  setPage,
  setTotal,
  setPagination,
};
