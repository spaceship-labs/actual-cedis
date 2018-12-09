import actions from './actions';

const initialState = {
  page: 1,
  total: 1,
  entries: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case actions.setOrders.type:
      return { ...state, entries: [...payload] };
    case actions.setPage.type:
      return { ...state, page: payload };
    case actions.setTotal.type:
      return { ...state, total: payload };
    default:
      return state;
  }
}
