import { createActions } from 'ractionx';

const prefix = '@actual/cedis/lists/Orders';

const types = [
  'GET_ALERTS',
  'SET_ALERTS',
  'CHANGE_PAGE',
  'SET_PAGE',
  'SET_TOTAL',
];

const { getAlerts, setAlerts, changePage, setPage, setTotal } = createActions(
  prefix,
  types
);

export default { getAlerts, setAlerts, changePage, setPage, setTotal };
