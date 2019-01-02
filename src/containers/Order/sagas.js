import { takeLatest, put } from 'redux-saga/effects';
import ordersActions from '../../redux/objects/actions';
import containerActions from './actions';

export function* getOrderSaga({ payload: id }) {
  yield put(ordersActions.getOrders(id));
}

export default function* OrdersViewSaga() {
  yield takeLatest(containerActions.getOrder.type, getOrderSaga);
}
