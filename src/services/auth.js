import history from './history';
import {
  getToken as utilityGetToken,
  clearToken as utilityClearToken,
} from 'helpers/utility';
import jwt from 'jsonwebtoken';

export function logout() {
  utilityClearToken();
  history.replace('/');
}

export function getToken() {
  return utilityGetToken().get('idToken');
}

export function isAuthenticated() {
  const token = getToken();
  if (!token) {
    return false;
  }

  const { exp } = jwt.decode(token);
  const expiresAt = new Date(exp * 1000);
  console.log('expiresAt', expiresAt);
  // Check whether the current time is past the
  // access token's expiry time
  return new Date().getTime() < expiresAt;
}
