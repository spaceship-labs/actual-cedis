import { createActions } from 'ractionx';

const prefix = '@actual/cedis/lists/CancelRequests';

const types = [
  'GET_CANCEL_REQUESTS',
  'SET_CANCEL_REQUESTS',
  'CHANGE_PAGE',
  'SET_PAGE',
  'SET_TOTAL',
];

const {
  getCancelRequests,
  setCancelRequests,
  changePage,
  setPage,
  setTotal,
} = createActions(prefix, types);

export default {
  getCancelRequests,
  setCancelRequests,
  changePage,
  setPage,
  setTotal,
};
