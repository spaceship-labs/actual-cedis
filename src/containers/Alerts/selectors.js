export const pageSelector = ({ lists: { alerts } }) => alerts.page;
export const totalSelector = ({ lists: { alerts } }) => alerts.total;
export const alertsSelector = ({ lists: { alerts } }) => alerts.entries;
export const containerSelector = ({ lists }) => {
  const { entries: alerts, page: current, total } = lists.alerts;
  const pagination = { total, current };
  return { alerts, pagination };
};

export default {
  pageSelector,
  totalSelector,
  alertsSelector,
  containerSelector,
};
