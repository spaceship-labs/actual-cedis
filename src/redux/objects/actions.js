import { createActions } from 'ractionx';

const prefix = '@actual/cedis/objects';

const types = ['GET_ORDER', 'GET_CANCEL', 'UPDATE_CANCEL', 'SET_CANCEL'];

const { getOrder, getCancel, updateCancel, setCancel } = createActions(
  prefix,
  types
);

export default { getOrder, getCancel, updateCancel, setCancel };
