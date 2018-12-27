import { takeLatest, put, select } from 'redux-saga/effects';
import alertsActions from '../../redux/lists/alerts/actions';
import containerActions from './actions';
import { pageSelector } from './selectors';

export function* getAlertsSaga() {
  const page = yield select(pageSelector);
  yield put(alertsActions.getAlerts(page));
}

export function* changePageSaga({ payload: page }) {
  yield put(alertsActions.setPage(page));
}

export default function* AlertsSaga() {
  yield takeLatest(containerActions.getAlerts.type, getAlertsSaga);
  yield takeLatest(containerActions.changePage.type, changePageSaga);
}
