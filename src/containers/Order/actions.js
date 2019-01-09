import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/Order';

export const types = ['GET_ORDER', 'CREATE_CANCEL'];

const { getOrder, createCancel } = createActions(prefix, types);

export default { getOrder, createCancel };
