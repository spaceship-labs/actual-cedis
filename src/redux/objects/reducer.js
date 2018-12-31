import actions from './actions';

const initialState = {
  cancelRequest: {},
};

function objectsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.setCancel.type:
      return { ...state, cancel: payload };
    default:
      return state;
  }
}

export default objectsReducer;
