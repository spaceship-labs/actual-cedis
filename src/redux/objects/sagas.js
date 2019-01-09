import { call, takeLatest, put } from 'redux-saga/effects';
import actions from './actions';
import productActions from '../lists/products/actions';
import api from '../../services/api';

export function* orderSaga({ payload: orderId }) {
  const { data: order } = yield call(api.orders.findById, orderId);
  const { Details } = order;
  const productsId = Details.map(item => item.Product);
  yield put(productActions.getProducts(productsId));
  yield put(actions.setOrder(order));
}

export function* getCancelSaga(cancelId) {
  const { data: cancelOrder } = yield call(api.cancel.get, { id: cancelId });
  return cancelOrder;
}

export function* createCancelSaga({ payload }) {
  const { orderId, cancelAll, details, reason } = payload;
  try {
    const { data: state } = yield call(api.cancel.create, {
      orderId,
      cancelAll,
      details,
      reason,
    });
    console.log(state);
    alert('Solicitud de cancelación exitosa');
  } catch (e) {
    alert('Error al generar la cancelación');
  }
}

export function* updateCancelSaga({ payload }) {
  const { cancelOrderId: id, ...params } = payload;
  const { data: cancelOrder } = yield call(api.cancel.update, { id, params });
  return cancelOrder;
}

export default function* objectsSagas() {
  yield takeLatest(actions.getOrder.type, orderSaga);
  yield takeLatest(actions.getCancel.type, getCancelSaga);
  yield takeLatest(actions.createCancel.type, createCancelSaga);
  yield takeLatest(actions.updateCancel.type, updateCancelSaga);
}
