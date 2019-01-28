import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/CancelRequest';

export const types = ['GET_CANCEL'];

const { getCancel } = createActions(prefix, types);
export default { getCancel };
