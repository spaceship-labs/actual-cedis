import { all } from 'redux-saga/effects';
import orders from './orders/sagas';
import alerts from './alerts/sagas';
import cancelRequests from './cancelRequests/sagas';
// import actions from './actions';
// import api from '../../services/api';

// export function* ordersSaga(page = 1) {
//   console.log('Entra a la Saga');
//   const {
//     data: { data: orders, total },
//   } = yield call(api.orders.list, { page });
//   yield put(actions.orders.setOrders(orders));
//   yield put(actions.orders.setTotal(total));
// }

// export function* cancelsSaga(page = 1) {
//   const { data } = yield call(api.cancel.list, { page });
//   yield put(actions.setCancels(data));
// }

// export function* alertsSaga(page = 1) {
//   const { data } = yield call(api.alerts.list, { page });
//   yield put(actions.setAlerts(data));
// }

export default function* listsSagas() {
  yield all([orders(), alerts(), cancelRequests()]);
}
