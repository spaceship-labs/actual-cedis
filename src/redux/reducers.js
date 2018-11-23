import { combineReducers } from 'redux';
import Auth from './auth/reducer';
import App from './app/reducer';

export default combineReducers({
  Auth,
  App,
});
