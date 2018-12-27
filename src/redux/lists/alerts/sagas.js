import { takeLatest, put, call } from 'redux-saga/effects';
import actions from './actions';
import api from '../../../services/api';

export function* alertsSaga({ payload: page = 1 }) {
  const {
    data: { data: alerts, total },
  } = yield call(api.alerts.list, { page });
  yield put(actions.setAlerts(alerts));
  yield put(actions.setTotal(total));
}

export default function* alertsSagas() {
  yield takeLatest(actions.getAlerts.type, alertsSaga);
}
