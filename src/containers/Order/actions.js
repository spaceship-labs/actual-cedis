import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/Order/';

const types = ['GET_ORDER', 'SET_ORDER', 'CREATE_CANCEL_REQUEST'];

export const { getOrder, setOrder, createCancelRequest } = createActions(
  prefix,
  types
);

export default { getOrder, setOrder, createCancelRequest };
