import actions from './actions';
import shape from '../shape';

export default function orderReducer(state = shape, { type, payload }) {
  switch (type) {
    case actions.getOrders.type:
      return { ...state, loading: true };
    case actions.setOrders.type:
      return { ...state, entries: payload, loading: false };
    case actions.setTotal.type:
      return { ...state, total: payload };
    case actions.setPage.type:
      return { ...state, page: payload };

    default:
      return state;
  }
}
