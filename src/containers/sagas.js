import { all } from 'redux-saga/effects';
import ordersContainer from './OrdersView/sagas';
import orderContainer from './Order/sagas';
import alertsList from './Alerts/sagas';
import cancelResquestsList from './CancelRequestsList/sagas';
import cancelrequestDetail from './CancelRequest/sagas';

export default function* rootSaga() {
  yield all([
    ordersContainer(),
    orderContainer(),
    alertsList(),
    cancelResquestsList(),
    cancelrequestDetail(),
  ]);
}
