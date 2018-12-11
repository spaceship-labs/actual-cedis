import { takeLatest, call, put, select } from 'redux-saga/effects';
import { cancelsSaga } from '../../redux/lists/sagas';
import containerActions from './actions';
import { pageSelector } from './selectors';

export function* getCancelRequestsSaga() {
  const page = yield select(pageSelector);
  const { orderCancelations, total } = yield call(cancelsSaga, page);
  yield put(containerActions.setTotal(total));
  yield put(containerActions.setCancelRequests(orderCancelations));
}

export function* changePageSaga({ payload: page }) {
  yield put(containerActions.setPage(page));
}

export default function* CancelRequestsListsSaga() {
  yield takeLatest(
    containerActions.getCancelRequests.type,
    getCancelRequestsSaga
  );
  yield takeLatest(containerActions.changePage.type, changePageSaga);
}
