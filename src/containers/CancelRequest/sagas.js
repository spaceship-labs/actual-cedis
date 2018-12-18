import { call, put, select, takeLatest } from 'redux-saga/effects';
import containerActions from './actions';
import { getCancelSaga, updateCancelSaga } from '../../redux/objects/sagas';
import { productsSaga } from '../../redux/lists/sagas';
import {
  statusSelector,
  acceptedSelector,
  requestSelector,
  rejectedSelector,
} from './selectors';
import { extractKeyValues, arrayToObject } from '../../helpers/dataStructures';

export function* getCancelRequestSaga({ payload: cancelRequestId }) {
  const cancelRequest = yield call(getCancelSaga, cancelRequestId);
  const prodsIds = yield call(
    extractKeyValues,
    cancelRequest.Details,
    'Product',
    false
  );
  const Details = yield call(arrayToObject, cancelRequest.Details, 'id');
  const prods = yield call(productsSaga, prodsIds);
  const products = yield call(arrayToObject, prods, 'id');

  yield put(
    containerActions.setCancelRequest({ ...cancelRequest, Details, products })
  );
}

export function* updateCancelRequestSaga({ payload }) {
  try {
    const { id, requestStatus, answers } = payload;
    const detailApprovement = Object.keys(answers).map(item => ({
      id: item,
      status: answers[item],
    }));
    const params = {
      orderId: id,
      requestStatus,
      detailApprovement,
    };
    yield call(updateCancelSaga, params);
    alert('Cambios guardados con exito. puede cerrar la confirmacion.');
    yield put(containerActions.hideConfirmDialog());
  } catch (err) {
    console.log(err);
    alert('Hubo un error al guardar los cambios, intente mas tarde.');
  }
}

export function* addAcceptedSaga(index) {
  const request = yield select(requestSelector);
  const accepted = yield select(acceptedSelector);
  const elem = { id: request.someAttr[index].id, authorized: true };
  const newAccepted = [...accepted, { ...elem }];
  yield put(containerActions.setAccepted(newAccepted));
}

export function* addRejectedSaga(index) {
  const request = yield select(requestSelector);
  const rejected = yield select(rejectedSelector);
  const elem = { id: request.someAttr[index].id, authorized: true };
  const newRejected = [...rejected, { ...elem }];
  yield put(containerActions.setRejected(newRejected));
}

export function* removeAcceptedSaga(ind) {
  const accepted = yield select(acceptedSelector);
  accepted.splice(ind, 1);
  yield put(containerActions.setAccepted(accepted));
}

export function* removeRejectedSaga(ind) {
  const rejected = yield select(rejectedSelector);
  rejected.splice(ind, 1);
  yield put(containerActions.setRejected(rejected));
}

export default function* CancelRequestSaga() {
  yield takeLatest(
    containerActions.getCancelRequest.type,
    getCancelRequestSaga
  );
  yield takeLatest(
    containerActions.updateCancelRequest.type,
    updateCancelRequestSaga
  );
  yield takeLatest(containerActions.addAccepted.type, addAcceptedSaga);
  yield takeLatest(containerActions.addRejected.type, addRejectedSaga);
  yield takeLatest(containerActions.removeAccepted.type, removeAcceptedSaga);
  yield takeLatest(containerActions.removeRejected.type, removeRejectedSaga);
}
