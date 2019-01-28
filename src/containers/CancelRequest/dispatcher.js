import actions from './actions';

const dispatcher = dispatch => ({
  getCancel: params => dispatch(actions.getCancel(params)),
});

export default dispatcher;
