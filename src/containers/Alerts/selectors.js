export const pageSelector = ({ containers: { Alerts } }) => Alerts.page;
export const totalSelector = ({ containers: { Alerts } }) => Alerts.total;
export const alertsSelector = ({ containers: { Alerts } }) => Alerts.entries;
export const containerSelector = ({ containers: { Alerts } }) => {
  const { entries: orders, page: current, total } = Alerts;
  const pagination = { total, current };
  return { orders, pagination };
};

export default {
  pageSelector,
  totalSelector,
  alertsSelector,
  containerSelector,
};
