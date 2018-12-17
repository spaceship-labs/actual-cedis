import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  setCancelRequest,
  setRejected,
  setAccepted,
  getCancelRequest,
  addAccepted,
  addRejected,
  removeAccepted,
  removeRejected,
  updateCancelRequest,
} from './actions';
import { getCancelSaga, updateCancelSaga } from '../../redux/objects/sagas';
import {
  statusSelector,
  acceptedSelector,
  requestSelector,
  rejectedSelector,
} from './selectors';

export function* getCancelRequestSaga(cancelRequestId) {
  const cancelRequest = yield call(getCancelSaga, cancelRequestId);

  yield put(setCancelRequest(cancelRequest));
}

export function* updateCancelRequestSaga() {
  const status = yield select(statusSelector);
  if (status === 'rejected' || status === 'authorized') {
    yield call(updateCancelSaga, { requestStatus: status });
  } else {
    const accepted = yield select(acceptedSelector);
    const rejected = yield select(rejectedSelector);
    const detailApprovement = [...accepted, ...rejected];
    yield call(updateCancelSaga, { detailApprovement });
  }
}

export function* addAcceptedSaga(index) {
  const request = yield select(requestSelector);
  const accepted = yield select(acceptedSelector);
  const elem = { id: request.someAttr[index].id, authorized: true };
  const newAccepted = [...accepted, { ...elem }];
  yield put(setAccepted(newAccepted));
}

export function* addRejectedSaga(index) {
  const request = yield select(requestSelector);
  const rejected = yield select(rejectedSelector);
  const elem = { id: request.someAttr[index].id, authorized: true };
  const newRejected = [...rejected, { ...elem }];
  yield put(setRejected(newRejected));
}

export function* removeAcceptedSaga(ind) {
  const accepted = yield select(acceptedSelector);
  accepted.splice(ind, 1);
  yield put(setAccepted(accepted));
}

export function* removeRejectedSaga(ind) {
  const rejected = yield select(rejectedSelector);
  rejected.splice(ind, 1);
  yield put(setRejected(rejected));
}

export default function* CancelRequestSaga() {
  yield takeLatest(getCancelRequest.type, getCancelRequestSaga);
  yield takeLatest(updateCancelRequest.type, updateCancelRequestSaga);
  yield takeLatest(addAccepted.type, addAcceptedSaga);
  yield takeLatest(addRejected.type, addRejectedSaga);
  yield takeLatest(removeAccepted.type, removeAcceptedSaga);
  yield takeLatest(removeRejected.type, removeRejectedSaga);
}
