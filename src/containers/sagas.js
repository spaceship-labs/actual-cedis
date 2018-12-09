import { all } from 'redux-saga/effects';
import ordersContainer from './OrdersView/sagas';
import orderContainer from './Order/sagas';

export default function* rootSaga() {
  yield all([ordersContainer(), orderContainer()]);
}
