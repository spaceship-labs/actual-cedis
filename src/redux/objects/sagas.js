import { call, takeLatest, put } from 'redux-saga/effects';
import actions from './actions';
import productsActions from '../lists/products/actions';
import api from '../../services/api';
import AlertDialog from '../../components/dialogAlert';
import { arrayToObject, extractKeyValues } from '../../helpers/dataStructures';

export function* orderSaga({ payload: orderId }) {
  const { data: order } = yield call(api.orders.findById, orderId);
  const { Details } = order;
  const productsId = Details.map(item => item.Product);
  yield put(productsActions.getProducts(productsId));
  yield put(actions.setOrder(order));
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

export function* createCancelSaga({ payload }) {
  const { orderId, cancelAll, details, reason } = payload;
  try {
    yield call(api.cancel.create, {
      orderId,
      cancelAll,
      details,
      reason,
    });
    AlertDialog('SUCCESSFUL', 'Solicitud de cancelación exitosa');
  } catch (e) {
    AlertDialog('ERROR', 'Error al generar la cancelación');
  }
}

export function* updateCancelSaga({ payload }) {
  try {
    const { params } = payload;
    const { data: cancelOrder } = yield call(api.cancel.update, { ...params });
    yield put(actions.getCancel(cancelOrder.id));
    AlertDialog('SUCCESSFUL', 'Solicitud Procesada con éxito');
  } catch (err) {
    AlertDialog('ERROR', 'API Error');
    throw new Error('API Error');
  }
}

export default function* objectsSagas() {
  yield takeLatest(actions.getOrder.type, orderSaga);
  yield takeLatest(actions.getCancel.type, getCancelSaga);
  yield takeLatest(actions.createCancel.type, createCancelSaga);
  yield takeLatest(actions.updateCancel.type, updateCancelSaga);
}
