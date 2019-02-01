export const pageSelector = ({ lists: { orders } }) => orders.page;
export const totalSelector = ({ lists: { orders } }) => orders.total;
export const ordersSelector = ({ lists: { orders } }) => orders.entries;
export const loadingSelector = ({ lists: { orders } }) => orders.loading;
export const containerSelector = ({ lists }) => {
  const { entries: orders, page: current, total, loading } = lists.orders;
  const pagination = { total, current };
  return { orders, pagination, loading };
};

export default {
  pageSelector,
  totalSelector,
  ordersSelector,
  containerSelector,
  loadingSelector,
};
