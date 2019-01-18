export const pageSelector = ({ lists: { orders } }) => orders.page;
export const totalSelector = ({ lists: { orders } }) => orders.total;
export const ordersSelector = ({ lists: { orders } }) => orders.entries;
export const errorSelector = ({ lists: { orders } }) => orders.error;
export const containerSelector = ({ lists }) => {
  const { entries: orders, page: current, total, error } = lists.orders;
  const pagination = { total, current };
  return { orders, pagination, error };
};

export default {
  pageSelector,
  totalSelector,
  ordersSelector,
  containerSelector,
};
