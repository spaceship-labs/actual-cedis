import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/Order/';

const types = [
  'GET_ORDER',
  'SET_ORDER',
  'CREATE_CANCEL_REQUEST',
  'SET_PRODUCTS',
  'SET_ALL',
  'SHOW_POP_UP',
  'HIDE_POP_UP',
];

export const {
  getOrder,
  setOrder,
  createCancelRequest,
  setProducts,
  setAll,
  showPopUp,
  hidePopUp,
} = createActions(prefix, types);

export default {
  getOrder,
  setOrder,
  createCancelRequest,
  setProducts,
  setAll,
  showPopUp,
  hidePopUp,
};
