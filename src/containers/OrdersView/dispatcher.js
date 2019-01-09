import actions from './actions';

const dispatcher = dispatch => ({
  changePage: params => dispatch(actions.changePage(params)),
  getOrders: () => dispatch(actions.getOrders()),
});

export default dispatcher;
