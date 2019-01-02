import { takeLatest, put } from 'redux-saga/effects';
import ordersActions from '../../redux/objects/actions';
// import productActions from '../../redux/products/actions';
import containerActions from './actions';

export function* getOrderSaga({ payload: id }) {
  yield put(ordersActions.getOrder(id));
}
// export function* getProduct() {
//   yield put(productActions.getProducts());
// }

export default function* OrdersViewSaga() {
  yield takeLatest(containerActions.getOrder.type, getOrderSaga);
}
