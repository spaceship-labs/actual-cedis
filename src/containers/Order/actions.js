import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/Order/';

const types = [
  'GET_ORDER',
  'SET_ORDER',
  'CREATE_CANCEL_REQUEST',
  'SET_PRODUCTS',
  'SET_ALL',
];

export const {
  getOrder,
  setOrder,
  createCancelRequest,
  setProducts,
  setAll,
} = createActions(prefix, types);

export default { getOrder, setOrder, createCancelRequest, setProducts, setAll };
