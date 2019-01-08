import actions from './actions';

const dispatcher = dispatch => ({
  getCancelRequest: params => dispatch(actions.getCancelRequest(params)),
  updateCancel: params => dispatch(actions.updateCancel(params)),
});

export default dispatcher;
