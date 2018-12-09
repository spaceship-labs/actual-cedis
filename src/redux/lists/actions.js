import { createActions } from 'ractionx';

const prefix = '@actual/cedis/lists';

const types = ['GET_ORDERS', 'GET_CANCELS', 'GET_ALERTS'];

const { getOrders, getCancels, getAlerts } = createActions(prefix, types);

export default { getOrders, getCancels, getAlerts };
