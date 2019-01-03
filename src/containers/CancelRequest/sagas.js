import { takeLatest, put } from 'redux-saga/effects';
import containerActions from './actions';
import objectsActions from '../../redux/objects/actions';

export function* getCancelRequestSaga({ payload: cancelRequestId }) {
  yield put(containerActions.setLoading(true));
  yield put(objectsActions.getCancel(cancelRequestId));
}

export default function* CancelRequestSagas() {
  yield takeLatest(
    containerActions.getCancelRequest.type,
    getCancelRequestSaga
  );
}
