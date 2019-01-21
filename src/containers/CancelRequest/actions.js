import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/CancelRequest';

export const types = ['GET_CANCEL_REQUEST'];

const { getCancelRequest } = createActions(prefix, types);
export default { getCancelRequest };
