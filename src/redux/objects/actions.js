import { createActions } from 'ractionx';

const prefix = '@actual/cedis/objects';

const types = [
  'GET_ORDER',
  'SET_ORDER',
  'GET_CANCEL',
  'CREATE_CANCEL',
  'UPDATE_CANCEL',
  'SET_CANCEL',
];

const {
  getOrder,
  setOrder,
  getCancel,
  createCancel,
  updateCancel,
  setCancel,
} = createActions(prefix, types);

export default {
  getOrder,
  setOrder,
  getCancel,
  createCancel,
  updateCancel,
  setCancel,
};
