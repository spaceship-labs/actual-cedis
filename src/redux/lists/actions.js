import { createActions } from 'ractionx';

const prefix = '@actual/cedis/lists';

const types = [
  'GET_ORDERS',
  'GET_CANCELS',
  'GET_ALERTS',
  'SET_ORDERS',
  'SET_CANCELS',
  'SET_ALERTS',
];

const ordersPrefix = `${prefix}/Orders`;
const ordersTypes = [
  'GET_ORDERS',
  'SET_ORDERS',
  'CHANGE_PAGE',
  'SET_PAGE',
  'SET_TOTAL',
];

const orders = createActions(ordersPrefix, ordersTypes);

const {
  getOrders,
  getCancels,
  getAlerts,
  setOrders,
  setCancels,
  setAlerts,
} = createActions(prefix, types);

export default {
  getOrders,
  getCancels,
  getAlerts,
  setOrders,
  setCancels,
  setAlerts,
  orders,
};
