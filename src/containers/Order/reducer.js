import { setOrder } from './actions';

const initialState = {};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case setOrder.type:
      return payload;
    default:
      return state;
  }
}
