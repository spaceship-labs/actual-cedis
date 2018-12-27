import { all } from 'redux-saga/effects';
import orders from './orders/sagas';
import alerts from './alerts/sagas';
import cancelRequests from './cancelRequests/sagas';

export default function* listsSagas() {
  yield all([orders(), alerts(), cancelRequests()]);
}
