import {
  setCancelRequest,
  setAccepted,
  setRejected,
  resetState,
  setStatus,
} from './actions';

const initialState = {
  request: {},
  status: '',
  accepted: [],
  rejected: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case setCancelRequest.type:
      return { ...state, request: { ...payload } };
    case setAccepted.type:
      return { ...state, accepted: [...payload] };
    case setRejected.type:
      return { ...state, rejected: [...payload] };
    case resetState.type:
      return initialState;
    case setStatus.type:
      return { ...state, status: payload };
    default:
      return state;
  }
}
