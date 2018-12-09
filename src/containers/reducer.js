import { combineReducers } from 'redux';
import OrdersView from './OrdersView/reducer';
import Order from './Order/reducer';
import CancelRequest from './CancelRequest/reducer';
import CancelRequestsList from './CancelRequestsList/reducer';
import Alerts from './Alerts/reducer';

export default combineReducers({
  OrdersView,
  CancelRequest,
  CancelRequestsList,
  Alerts,
  Order,
});
