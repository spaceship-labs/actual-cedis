import actions from './actions';

const initialState = {};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case actions.setOrder.type:
      return payload;
    default:
      return state;
  }
}
