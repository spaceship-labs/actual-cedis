import { combineReducers } from 'redux';
import Order from './Order/reducer';
import CancelRequest from './CancelRequest/reducer';

export default combineReducers({
  CancelRequest,
  Order,
});
