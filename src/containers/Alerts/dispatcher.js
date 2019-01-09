import actions from './actions';

const dispatcher = dispatch => ({
  changePage: params => dispatch(actions.changePage(params)),
  getAlerts: () => dispatch(actions.getAlerts()),
});

export default dispatcher;
