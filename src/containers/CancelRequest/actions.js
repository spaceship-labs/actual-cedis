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
  'SHOW_CONFIRM_DIALOG',
  'HIDE_CONFIRM_DIALOG',
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
  showConfirmDialog,
  hideConfirmDialog,
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
  showConfirmDialog,
  hideConfirmDialog,
};
