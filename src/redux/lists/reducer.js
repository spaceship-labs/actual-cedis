import { combineReducers } from 'redux';
import orders from './orders/reducer';
import alerts from './alerts/reducer';
import cancelRequests from './cancelRequests/reducer';

export default combineReducers({
  orders,
  alerts,
  cancelRequests,
});

// const shape = {
//   entries: [],
//   total: 0,
//   page: 1,
// };

// const initialState = {
//   orders: shape,
//   cancelRequests: shape,
//   alerts: shape,
// };

// export default function listsReducer(state = initialState, { type, payload }) {
//   const { orders, cancelRequests, alerts }
//   switch (type) {
//     case actions.orders.setOrders:
//     return { ...state, }
//     case actions.setAlerts.type:
//       return { ...state, alerts: payload };
//     case actions.setOrders.type:
//       return { ...state, orders: payload };
//     case actions.setCancels.type:
//       return { ...state, cancelRequests: payload };
//     default:
//       return state;
//   }
// }
