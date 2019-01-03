import actions from './actions';

const dispatcher = dispatch => ({
  getOrder: params => dispatch(actions.getOrder(params)),
  // getProducts: params => dispatch(actions.getProducts(params)),
});

export default dispatcher;
