import { all } from 'redux-saga/effects';
import ordersContainer from './OrdersView/sagas';

export default function* rootSaga(getState) {
  yield all([ordersContainer()]);
}
