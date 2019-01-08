import { takeLatest, put } from 'redux-saga/effects';
import containerActions from './actions';
import objectsActions from '../../redux/objects/actions';

export function* getCancelRequestSaga({ payload: cancelRequestId }) {
  yield put(containerActions.setLoading(true));
  yield put(objectsActions.getCancel(cancelRequestId));
}

export function* updateCancelSaga({ payload }) {
  const { id, requestStatus, answers } = payload;
  const answersKeys = Object.keys(answers);

  if (requestStatus === 'partially' && answersKeys.length === 0) {
    alert('No Changes');
  } else if (requestStatus !== 'partially' && answersKeys.length > 0) {
    alert('Inconsistent Data');
  } else {
    const detailApprovement = answersKeys.map(item => ({
      id: item,
      status: answers[item],
    }));

    const params = {
      id,
      requestStatus,
      detailApprovement,
    };

    yield put(objectsActions.updateCancel({ params }));
  }
}

export default function* CancelRequestSagas() {
  yield takeLatest(
    containerActions.getCancelRequest.type,
    getCancelRequestSaga
  );
  yield takeLatest(containerActions.updateCancel.type, updateCancelSaga);
}
