import { takeLatest, call, put } from 'redux-saga/effects';
import actions from './actions';
import api from '../../../services/api';

export function* cancelRequestsSaga({ payload: page = 1 }) {
  const {
    data: { orderCancelations: cancelRequests, total },
  } = yield call(api.cancel.list, { page });
  yield put(actions.setCancelRequests(cancelRequests));
  yield put(actions.setTotal(total));
}

export default function* cancelRequestsSagas() {
  yield takeLatest(actions.getCancelRequests.type, cancelRequestsSaga);
}
