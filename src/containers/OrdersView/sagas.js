import { takeLatest, call, put, select } from 'redux-saga/effects';
// import { listsActions, objectsActions } from '../../redux/actions';
import { ordersSaga } from '../../redux/lists/sagas';
import containerActions from './actions';
import { pageSelector } from './selectors';

export function* getOrdersSaga() {
  const page = yield select(pageSelector);
  const { data: orders, total } = yield call(ordersSaga, page);
  yield put(containerActions.setTotal(total));
  yield put(containerActions.setOrders(orders));
}

export function* changePageSaga({ payload: page }) {
  yield put(containerActions.setPage(page));
}

export default function* OrdersViewSaga() {
  yield takeLatest(containerActions.getOrders.type, getOrdersSaga);
  yield takeLatest(containerActions.changePage.type, changePageSaga);
}
