import { takeLatest, call, put } from 'redux-saga/effects';
import actions from './actions';
import api from '../../../services/api';
import { arrayToObject } from '../../../helpers/dataStructures';

export function* productsSaga({ payload: productsIds }) {
  const { data } = yield call(api.products.list, productsIds);
  const products = yield call(arrayToObject, data, 'id');
  yield put(actions.setProducts(products));
}

export default function* productsSagas() {
  yield takeLatest(actions.getProducts.type, productsSaga);
}
