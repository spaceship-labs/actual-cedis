import { call, takeLatest, put } from 'redux-saga/effects';
import { getOrder, setOrder } from './actions';
import { orderSaga } from '../../redux/objects/sagas';

export function* getOrderSaga({ payload: orderId }) {
  const { data } = yield call(orderSaga, orderId);
  yield put(setOrder(data));
}

export default function* OrderSaga() {
  yield takeLatest(getOrder.type, getOrderSaga);
}
