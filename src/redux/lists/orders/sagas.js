import { takeLatest, call, put } from 'redux-saga/effects';
import actions from './actions';
import api from '../../../services/api';
import AlertDialog from '../../../components/dialogAlert';

export function* ordersSaga({ payload: page = 1 }) {
  const {
    data: { orders, total },
  } = yield call(api.orders.list, { page });
  yield put(actions.setOrders(orders));
  yield put(actions.setTotal(total));
}

export function* filterOrderSaga({ payload: { page = 1, category, keyword } }) {
  try {
    const { data } = yield call(api.orders.search, {
      page,
      category,
      keyword,
    });
    const { orders = [''], total } = data;
    yield put(actions.setOrders(orders));
    yield put(actions.setTotal(total));
  } catch (error) {
    // const {
    //   response: { data },
    // } = error;
    // AlertDialog('', data);
    const { message } = error;
    AlertDialog('', message);
  }
}

export default function* ordersSagas() {
  yield takeLatest(actions.getOrders.type, ordersSaga);
  yield takeLatest(actions.filterOrders.type, filterOrderSaga);
}
