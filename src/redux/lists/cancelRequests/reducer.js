import actions from './actions';
import shape from '../shape';

export default function cancelRequestsReducer(
  state = shape,
  { type, payload }
) {
  switch (type) {
    case actions.getCancelRequests.type:
      return { ...state, loading: true };
    case actions.setCancelRequests.type:
      return { ...state, entries: payload, loading: false };
    case actions.setTotal.type:
      return { ...state, total: payload };
    case actions.setPage.type:
      return { ...state, page: payload };
    default:
      return state;
  }
}
