import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/OrdersView';

export const types = ['GET_ORDERS', 'CHANGE_PAGE'];

const { changePage, getOrders } = createActions(prefix, types);

export default { changePage, getOrders };
