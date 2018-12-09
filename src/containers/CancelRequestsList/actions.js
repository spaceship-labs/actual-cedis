import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/CancelRequestsList';

const types = [
  'CHANGE_PAGE',
  'GET_CANCEL_REQUESTS',
  'SET_CANCEL_REQUESTS',
  'SET_PAGE',
  'SET_TOTAL',
  'SET_PAGINATION',
];

export const {
  changePage,
  getCancelRequests,
  setCancelRequests,
  setPage,
  setTotal,
  setPagination,
} = createActions(prefix, types);

export default {
  changePage,
  getCancelRequests,
  setCancelRequests,
  setPage,
  setTotal,
  setPagination,
};
