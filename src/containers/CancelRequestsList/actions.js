import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/CancelRequestsList';

const types = ['CHANGE_PAGE', 'GET_CANCEL_REQUESTS'];

const { changePage, getCancelRequests } = createActions(prefix, types);

export default { changePage, getCancelRequests };
