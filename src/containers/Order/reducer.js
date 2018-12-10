import actions from './actions';

const initialState = {
  order: {},
  products: {},
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case actions.setOrder.type:
      return { ...state, order: payload };
    case actions.setProducts.type:
      return { ...state, products: payload };
    case actions.setAll.type:
      return { ...payload };
    default:
      return state;
  }
}
