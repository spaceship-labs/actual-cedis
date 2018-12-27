import { createActions } from 'ractionx';

const prefix = '@actual/cedis/containers/Alerts/';

const types = ['CHANGE_PAGE', 'GET_ALERTS'];

const { changePage, getAlerts } = createActions(prefix, types);

export default { changePage, getAlerts };
