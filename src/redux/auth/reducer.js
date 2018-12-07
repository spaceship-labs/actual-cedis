import { Map } from 'immutable';
import { getToken } from '../../helpers/utility';
import actions from './actions';

const initState = new Map({
  idToken: false,
});

export default function authReducer(
  state = initState.merge(getToken()),
  action
) {
  switch (action.type) {
    case actions.loginSuccess.type:
      return state.set('idToken', action.payload.token);
    case actions.logout.type:
      return initState;
    case actions.setLoading.type:
      return state.set('loading', action.payload);
    default:
      return state;
  }
}
