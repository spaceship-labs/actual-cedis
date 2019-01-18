import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/CancelRequestsList';

const types = ['CHANGE_PAGE', 'GET_CANCEL_REQUESTS', 'FILTER_CANCEL'];

const { changePage, getCancelRequests, filterCancel } = createActions(
  prefix,
  types
);

export default { changePage, getCancelRequests, filterCancel };
