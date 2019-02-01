import actions from './actions';

const dispatcher = dispatch => ({
  changePage: params => dispatch(actions.changePage(params)),
  getOrders: () => dispatch(actions.getOrders()),
  filterOrders: params => dispatch(actions.filterOrders(params)),
});

export default dispatcher;
