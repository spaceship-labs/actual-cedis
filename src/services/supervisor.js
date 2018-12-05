import Notification from 'components/notification';
import { call } from 'redux-saga/effects';

const title = 'Hubo un error';
const networkError = 'Por favor verifique su conexión e intentelo de nuevo';
const badRequest = 'Por favor revisa los campos';
const notAuthorized = 'Por favor verifica tu usuario y contraseña';
const forbidden = 'Por favor verifique su sesión';
const serverError = 'Existe un error con el servicio, intente más tarde';
const tryLater = 'Por favor reintentalo más tarde';

function* supervisor(task, ...args) {
  try {
    yield call(task, ...args);
  } catch (err) {
    console.log('err supervisor', err);
    if (err.message === 'Network Error')
      yield call(Notification, 'error', title, networkError);
    if (err.response && err.response.data && err.response.data.message)
      yield call(Notification, 'error', title, err.response.data.message);
    else if (err.response && err.response.status === 400)
      yield call(Notification, 'error', title, badRequest);
    else if (err.response && err.response.status === 401)
      yield call(Notification, 'error', title, notAuthorized);
    else if (err.response && err.response.status === 403)
      yield call(Notification, 'error', title, forbidden);
    else if (err.response && err.response.status === 500)
      yield call(Notification, 'error', title, serverError);
    else yield call(Notification, 'error', title, tryLater);
  }
}

export default supervisor;
