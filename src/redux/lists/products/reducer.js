import actions from './actions';

const initialState = {};

export default function orderReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.setProducts.type:
      return { ...state, ...payload };
    default:
      return state;
  }
}
