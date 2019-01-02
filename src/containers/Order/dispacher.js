import actions from './actions';

const dispatcher = dispatch => ({
  getOrder: params => dispatch(actions.getOrder(params)),
});

export default dispatcher;
