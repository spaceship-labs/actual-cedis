import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/CancelRequest';

const types = [
  'GET_CANCEL_REQUEST',
  'SET_CANCEL_REQUEST',
  'UPDATE_CANCEL_REQUEST',
  'ADD_ACCEPTED',
  'ADD_REJECTED',
  'SET_ACCEPTED',
  'SET_REJECTED',
  'REMOVE_ACCEPTED',
  'REMOVE_REJECTED',
  'RESET_STATE',
  'SET_STATUS',
];

export const {
  getCancelRequest,
  setCancelRequest,
  updateCancelRequest,
  addAccepted,
  addRejected,
  setAccepted,
  setRejected,
  removeAccepted,
  removeRejected,
  resetState,
  setStatus,
} = createActions(prefix, types);

export default {
  getCancelRequest,
  setCancelRequest,
  updateCancelRequest,
  addAccepted,
  addRejected,
  setAccepted,
  setRejected,
  removeAccepted,
  removeRejected,
  resetState,
  setStatus,
};
