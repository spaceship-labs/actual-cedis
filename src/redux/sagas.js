import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import containersSagas from '../containers/sagas';
import listsSagas from './lists/sagas';

export default function* rootSaga() {
  yield all([authSagas(), containersSagas(), listsSagas()]);
}
