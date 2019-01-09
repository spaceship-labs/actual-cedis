import { takeLatest, put } from 'redux-saga/effects';
import ordersActions from '../../redux/objects/actions';
import containerActions from './actions';

export function* getOrderSaga({ payload: id }) {
  yield put(ordersActions.getOrder(id));
}
export function* createCancelSaga({ payload }) {
  yield put(ordersActions.createCancel(payload));
}
export default function* OrdersViewSaga() {
  yield takeLatest(containerActions.getOrder.type, getOrderSaga);
  yield takeLatest(containerActions.createCancel.type, createCancelSaga);
}
