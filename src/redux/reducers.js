import { combineReducers } from 'redux';
import Auth from './auth/reducer';
import App from './app/reducer';
import containers from '../containers/reducer';

export default combineReducers({
  Auth,
  App,
  containers,
});
