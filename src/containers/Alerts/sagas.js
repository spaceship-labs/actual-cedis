import { takeLatest, call, put, select } from 'redux-saga/effects';
// import { listsActions, objectsActions } from '../../redux/actions';
import { alertsSaga } from '../../redux/lists/sagas';
import containerActions from './actions';
import { pageSelector } from './selectors';

export function* getAlertsSaga() {
  const page = yield select(pageSelector);
  const { data: alerts, total } = yield call(alertsSaga, page);
  yield put(containerActions.setTotal(total));
  yield put(containerActions.setAlerts(alerts));
}

export function* changePageSaga({ payload: page }) {
  yield put(containerActions.setPage(page));
}

export default function* AlertsSaga() {
  yield takeLatest(containerActions.getAlerts.type, getAlertsSaga);
  yield takeLatest(containerActions.changePage.type, changePageSaga);
}
