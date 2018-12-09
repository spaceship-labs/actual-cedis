import { combineReducers } from 'redux';
import OrdersView from './OrdersView/reducer';
import Order from './Order/reducer';

export default combineReducers({
  OrdersView,
  Order,
});
