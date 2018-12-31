import actions from './actions';

const dispatcher = dispatch => ({
  getCancelRequest: params => dispatch(actions.getCancelRequest(params)),
});

export default dispatcher;
