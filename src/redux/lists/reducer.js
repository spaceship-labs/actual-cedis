import { combineReducers } from 'redux';
import orders from './orders/reducer';
import alerts from './alerts/reducer';
import cancelRequests from './cancelRequests/reducer';

export default combineReducers({
  orders,
  alerts,
  cancelRequests,
});
