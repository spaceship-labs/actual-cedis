import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/CancelRequest';

export const types = ['GET_CANCEL_REQUEST', 'SET_LOADING'];

const { getCancelRequest, setLoading } = createActions(prefix, types);

export default { getCancelRequest, setLoading };
