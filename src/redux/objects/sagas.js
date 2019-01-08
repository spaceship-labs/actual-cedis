import { call, takeLatest, put } from 'redux-saga/effects';
import actions from './actions';
import productsActions from '../lists/products/actions';
import api from '../../services/api';
import { arrayToObject, extractKeyValues } from '../../helpers/dataStructures';

export function* orderSaga(orderId) {
  const order = yield call(api.orders.findById, orderId);
  return order;
}

export function* getCancelSaga({ payload: cancelId }) {
  const { data: cancelOrder } = yield call(api.cancel.get, cancelId);

  const productsId = yield call(
    extractKeyValues,
    cancelOrder.Details,
    'Product',
    false
  );
  yield put(productsActions.getProducts(productsId));

  const Details = yield call(arrayToObject, cancelOrder.Details, 'id');

  yield put(actions.setCancel({ ...cancelOrder, Details }));
}

export function* updateCancelSaga({ payload }) {
  try {
    const { params } = payload;
    const { data: cancelOrder } = yield call(api.cancel.update, { ...params });
    yield put(actions.getCancel(cancelOrder.id));
    alert('Solicitud Procesada con exito');
  } catch (err) {
    console.log(err);
    throw new Error('API Error');
  }
}

export default function* objectsSagas() {
  yield takeLatest(actions.getOrder.type, orderSaga);
  yield takeLatest(actions.getCancel.type, getCancelSaga);
  yield takeLatest(actions.updateCancel.type, updateCancelSaga);
}
