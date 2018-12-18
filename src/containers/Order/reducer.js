import actions from './actions';

const initialState = {
  order: {},
  products: {},
  showPopUp: false,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case actions.setOrder.type:
      return { ...state, order: payload };
    case actions.setProducts.type:
      return { ...state, products: payload };
    case actions.setAll.type:
      return { ...payload };
    case actions.showPopUp.type:
      return { ...state, showPopUp: true };
    case actions.hidePopUp.type:
      return { ...state, showPopUp: false };
    default:
      return state;
  }
}
