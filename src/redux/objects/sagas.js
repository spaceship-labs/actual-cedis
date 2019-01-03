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
  const { cancelOrderId: id, ...params } = payload;
  const { data: cancelOrder } = yield call(api.cancel.update, { id, params });
  return cancelOrder;
}

export default function* objectsSagas() {
  yield takeLatest(actions.getOrder.type, orderSaga);
  yield takeLatest(actions.getCancel.type, getCancelSaga);
  yield takeLatest(actions.updateCancel.type, updateCancelSaga);
}
