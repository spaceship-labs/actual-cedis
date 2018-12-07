import { call, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import api from '../../services/api';

export function* ordersSaga(page = 1) {
  const { data: orders } = yield call(api.orders.list, { page });
  return orders;
}

export function* cancelsSaga(page = 1) {
  const { data: cancels } = yield call(api.cancel.list, { page });
  return cancels;
}

export default function* listsSagas() {
  yield takeLatest(actions.getOrders.type, ordersSaga);
  yield takeLatest(actions.getCancels.type, cancelsSaga);
}
