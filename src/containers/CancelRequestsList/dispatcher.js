import actions from './actions';

const dispatcher = dispatch => ({
  changePage: params => dispatch(actions.changePage(params)),
  getCancelRequests: () => dispatch(actions.getCancelRequests()),
  filterCancel: params => {
    console.log('dispatch', params);
    return dispatch(actions.filterCancel(params));
  },
});

export default dispatcher;
