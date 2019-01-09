import { takeLatest, put, select } from 'redux-saga/effects';
import ordersActions from '../../redux/lists/orders/actions';
import containerActions from './actions';
import { pageSelector } from './selectors';

export function* getOrdersSaga() {
  const page = yield select(pageSelector);
  yield put(ordersActions.getOrders(page));
}

export function* changePageSaga({ payload: page }) {
  yield put(ordersActions.setPage(page));
}

export default function* OrdersViewSaga() {
  yield takeLatest(containerActions.getOrders.type, getOrdersSaga);
  yield takeLatest(containerActions.changePage.type, changePageSaga);
}
