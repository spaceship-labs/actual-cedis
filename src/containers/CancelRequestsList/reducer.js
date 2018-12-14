import { setCancelRequests, setPage, setTotal } from './actions';

const initialState = {
  page: 1,
  total: 1,
  entries: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case setCancelRequests.type:
      return { ...state, entries: [...payload] };
    case setPage.type:
      return { ...state, page: payload };
    case setTotal.type:
      return { ...state, total: payload };
    default:
      return state;
  }
}
