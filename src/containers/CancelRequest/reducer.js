import actions from './actions';

const initialState = {
  loading: false,
};

function CancelRequestReducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.setLoading.type:
      return { ...state, loading: payload };
    default:
      return state;
  }
}

export default CancelRequestReducer;
