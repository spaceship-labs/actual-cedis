import { call, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import api from '../../services/api';

export function* ordersSaga(page = 1) {
  const { data } = yield call(api.orders.list, { page });
  return data;
}

export function* cancelsSaga(page = 1) {
  const { data: cancels } = yield call(api.cancel.list, { page });
  return cancels;
}

export function* alertsSaga(page = 1) {
  const { data: alerts } = yield call(api.alerts.list, { page });
  return alerts;
}

export default function* listsSagas() {
  yield takeLatest(actions.getOrders.type, ordersSaga);
  yield takeLatest(actions.getCancels.type, cancelsSaga);
  yield takeLatest(actions.getAlerts.type, alertsSaga);
}
