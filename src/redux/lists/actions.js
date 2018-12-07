import { createActions } from 'ractionx';

const prefix = '@actual/cedis/lists';

const types = ['GET_ORDERS', 'GET_CANCELS'];

const { getOrders, getCancels } = createActions(prefix, types);

export default { getOrders, getCancels };
