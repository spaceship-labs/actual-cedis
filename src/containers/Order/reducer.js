import actions from './actions';

const initialState = {
  order: {},
  products: {},
  showPopUpFlag: false,
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
      return { ...state, showPopUpFlag: true };
    case actions.hidePopUp.type:
      return { ...state, showPopUpFlag: false };
    default:
      return state;
  }
}
