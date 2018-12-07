import { createActions } from 'ractionx';

const prefix = '@actual/cedis/objects';

const types = ['GET_ORDER', 'GET_CANCEL', 'CREATE_CANCEL', 'UPDATE_CANCEL'];

const { getOrder, getCancel, createCancel, updateCancel } = createActions(
  prefix,
  types
);

export default { getOrder, getCancel, createCancel, updateCancel };
