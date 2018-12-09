import actions from './actions';

const initialState = {
  request: {},
  status: '',
  accepted: [],
  rejected: [],
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case actions.setCancelRequest.type:
      return { ...state, request: { ...payload } };
    case actions.setAccepted.type:
      return { ...state, accepted: [...payload] };
    case actions.setRejected.type:
      return { ...state, rejected: [...payload] };
    case actions.resetState.type:
      return initialState;
    case actions.setStatus.type:
      return { ...state, status: payload };
    default:
      return state;
  }
}
