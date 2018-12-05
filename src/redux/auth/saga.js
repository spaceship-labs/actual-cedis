import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from './actions';
import api from 'services/api';
import { logout as authLogout } from 'services/auth';

function* onLogin(action) {
  try {
    yield put(actions.setLoading(true));
    const { data } = yield call(api.login.do, action.payload);
    yield put(actions.loginSuccess(data.data));
  } catch (e) {
    yield put(actions.setLoading(false));
    yield put(actions.loginError(e));
  }
}

function* onLoginSuccess(action) {
  yield localStorage.setItem('id_token', action.payload.token);
  yield put(push('/dashboard/categories'));
}

function* onLoginError() {}

function* onLogout() {
  yield authLogout();
}

export function* loginRequest() {
  yield takeEvery(actions.login, onLogin);
}
export function* loginSuccess() {
  yield takeEvery(actions.loginSuccess, onLoginSuccess);
}
export function* loginError() {
  yield takeEvery(actions.loginError, onLoginError);
}

export function* logout() {
  yield takeEvery(actions.logout, onLogout);
}

export default function* rootSaga() {
  yield all([
    fork(loginRequest),
    fork(loginSuccess),
    fork(loginError),
    fork(logout),
  ]);
}
