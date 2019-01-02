import { call, takeLatest, put } from 'redux-saga/effects';
import actions from './actions';
import api from '../../services/api';

export function* orderSaga(orderId) {
  const order = yield call(api.orders.findById, orderId);
  return order;
}

export function* getCancelSaga({ payload: cancelId }) {
  const { data: cancelOrder } = yield call(api.cancel.get, cancelId);
  yield put(actions.setCancel(cancelOrder));
}

export function* updateCancelSaga({ payload }) {
  const { cancelOrderId: id, ...params } = payload;
  const { data: cancelOrder } = yield call(api.cancel.update, { id, params });
  return cancelOrder;
}

export default function* objectsSagas() {
  yield takeLatest(actions.getOrder.type, orderSaga);
  yield takeLatest(actions.getCancel.type, getCancelSaga);
  yield takeLatest(actions.updateCancel.type, updateCancelSaga);
}
