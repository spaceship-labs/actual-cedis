import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/OrdersView';

export const types = ['GET_ORDERS', 'CHANGE_PAGE', 'FILTER_ORDERS'];

const { changePage, getOrders, filterOrders } = createActions(prefix, types);

export default { changePage, getOrders, filterOrders };
