import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/Order/';

const types = ['GET_ORDER', 'SET_ORDER'];

export const { getOrder, setOrder } = createActions(prefix, types);

export default { getOrder, setOrder };
