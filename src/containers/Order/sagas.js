import { call, takeLatest, put } from 'redux-saga/effects';
import { getOrder, setOrder, createCancelRequest } from './actions';
import { orderSaga, createCancelSaga } from '../../redux/objects/sagas';

export function* getOrderSaga({ payload: orderId }) {
  const { data } = yield call(orderSaga, orderId);
  yield put(setOrder(data));
}

export function* createRequestSaga({ payload }) {
  try {
    const { data } = yield call(createCancelSaga, payload);
    alert('Solicitud generada con exito');
  } catch (err) {
    console.log(err);
    alert('Hubo un error intentalo mas tarde');
  }
}

export default function* OrderSaga() {
  yield takeLatest(getOrder.type, getOrderSaga);
  yield takeLatest(createCancelRequest.type, createRequestSaga);
}
