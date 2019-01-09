import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/CancelRequest';

export const types = ['GET_CANCEL_REQUEST', 'SET_LOADING', 'UPDATE_CANCEL'];

const { getCancelRequest, setLoading, updateCancel } = createActions(
  prefix,
  types
);

export default { getCancelRequest, setLoading, updateCancel };
