import { call, takeLatest, put } from 'redux-saga/effects';
import {
  getOrder,
  setOrder,
  createCancelRequest,
  setProducts,
  setAll,
} from './actions';
import { orderSaga, createCancelSaga } from '../../redux/objects/sagas';
import { productsSaga } from '../../redux/lists/sagas';

export function* getOrderSaga({ payload: orderId }) {
  const { data: order } = yield call(orderSaga, orderId);
  const productsId = order.Details.map(item => item.Product);
  const prods = yield call(productsSaga, productsId);
  const products = prods.reduce((acc, item) => {
    acc[item.id] = { code: item.ItemCode, name: item.ItemName };
    return acc;
  }, {});
  // yield put(setProducts(prods));
  // yield put(setOrder(data));
  yield put(setAll({ products, order }));
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
