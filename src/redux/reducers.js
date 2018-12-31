import { combineReducers } from 'redux';
import Auth from './auth/reducer';
import App from './app/reducer';
import containers from '../containers/reducer';
import lists from './lists/reducer';
import objects from './objects/reducer';

export default combineReducers({
  Auth,
  App,
  containers,
  lists,
  objects,
});
