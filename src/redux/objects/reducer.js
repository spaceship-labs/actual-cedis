import actions from './actions';

const initialState = { order: {} };

export default function orderReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.setOrder.type:
      return { ...state, order: payload, loading: false };
    default:
      return state;
  }
}
