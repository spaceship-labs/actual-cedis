import actions from './actions';
import shape from '../shape';

export default function alertsReducer(state = shape, { type, payload }) {
  switch (type) {
    case actions.setAlerts.type:
      return { ...state, entries: payload };
    case actions.setTotal.type:
      return { ...state, total: payload };
    case actions.setPage.type:
      return { ...state, page: payload };
    default:
      return state;
  }
}
