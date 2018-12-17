import { takeLatest, call, put, select } from 'redux-saga/effects';
import { cancelsSaga } from '../../redux/lists/sagas';
import {
  setTotal,
  setCancelRequests,
  setPage,
  getCancelRequests,
  changePage,
} from './actions';
import { pageSelector } from './selectors';

export function* getCancelRequestsSaga() {
  const page = yield select(pageSelector);
  const { data: cancelRequests, total } = yield call(cancelsSaga, page);
  yield put(setTotal(total));
  yield put(setCancelRequests(cancelRequests));
}

export function* changePageSaga({ payload: page }) {
  yield put(setPage(page));
}

export default function* OrdersViewSaga() {
  yield takeLatest(getCancelRequests.type, getCancelRequestsSaga);
  yield takeLatest(changePage.type, changePageSaga);
}
