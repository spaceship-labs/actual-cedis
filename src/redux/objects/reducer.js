import actions from './actions';

const initialState = {
  cancelRequest: {},
  order: {},
};

function objectsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.getCancel.type:
      return { ...state, loadingCancel: true };
    case actions.setCancel.type:
      return { ...state, cancelRequest: payload, loadingCancel: false };
    case actions.setOrder.type:
      return { ...state, order: payload, loading: false };
    default:
      return state;
  }
}

export default objectsReducer;
