import { takeLatest, put, select } from 'redux-saga/effects';
import cancelRequestsActions from '../../redux/lists/cancelRequests/actions';
import containerActions from './actions';
import { pageSelector } from './selectors';

export function* getCancelRequestsSaga() {
  const page = yield select(pageSelector);
  yield put(cancelRequestsActions.getCancelRequests(page));
}

export function* changePageSaga({ payload: page }) {
  yield put(cancelRequestsActions.setPage(page));
}

export function* filterCancelOrderSaga({ payload }) {
  const page = yield select(pageSelector);
  const { category, keyword } = payload;
  const data = { page, category, keyword };
  yield put(cancelRequestsActions.filterCancel(data));
}

export default function* CancelRequestsSaga() {
  yield takeLatest(
    containerActions.getCancelRequests.type,
    getCancelRequestsSaga
  );
  yield takeLatest(containerActions.changePage.type, changePageSaga);
  yield takeLatest(containerActions.filterCancel.type, filterCancelOrderSaga);
}
