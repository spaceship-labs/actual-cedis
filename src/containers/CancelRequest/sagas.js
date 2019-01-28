import { takeLatest, put } from 'redux-saga/effects';
import containerActions from './actions';
import objectsActions from '../../redux/objects/actions';

export function* getCancelSaga({ payload: cancelRequestId }) {
  yield put(objectsActions.getCancel(cancelRequestId));
}

export default function* CancelRequestSagas() {
  yield takeLatest(containerActions.getCancel.type, getCancelSaga);
}
