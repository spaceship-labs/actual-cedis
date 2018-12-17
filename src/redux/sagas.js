import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import containersSagas from '../containers/sagas';

export default function* rootSaga() {
  yield all([authSagas(), containersSagas()]);
}
