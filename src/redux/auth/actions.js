import { createActions } from 'ractionx';
const prefix = '@actual/auth';
const types = [
  'LOGIN',
  'LOGOUT',
  'LOGIN_SUCCESS',
  'LOGIN_ERROR',
  'CLEAR_SESSION',
  'SET_LOADING',
];
const authActions = createActions(prefix, types);

export default authActions;
