import actions from './actions';

const dispatcher = dispatch => ({
  changePage: params => dispatch(actions.changePage(params)),
  getCancelRequests: () => dispatch(actions.getCancelRequests()),
});

export default dispatcher;
