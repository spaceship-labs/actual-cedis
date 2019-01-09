import actions from './actions';

const dispatcher = dispatch => ({
  getOrder: params => dispatch(actions.getOrder(params)),
  createCancel: params => dispatch(actions.createCancel(params)),
});

export default dispatcher;
