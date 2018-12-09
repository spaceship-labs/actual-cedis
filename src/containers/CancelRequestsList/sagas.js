import { takeLatest, call, put, select } from 'redux-saga/effects';
import { cancelsSaga } from '../../redux/lists/sagas';
import containerActions from './actions';
import { pageSelector } from './selectors';

export function* getCancelRequestsSaga() {
  const page = yield select(pageSelector);
  const { data: cancelRequests, total } = yield call(cancelsSaga, page);
  yield put(containerActions.setTotal(total));
  yield put(containerActions.setCancelRequests(cancelRequests));
}

export function* changePageSaga({ payload: page }) {
  yield put(containerActions.setPage(page));
}

export default function* OrdersViewSaga() {
  yield takeLatest(
    containerActions.getCancelRequests.type,
    getCancelRequestsSaga
  );
  yield takeLatest(containerActions.changePage.type, changePageSaga);
}
