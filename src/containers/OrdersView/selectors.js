export const pageSelector = ({ lists: { orders } }) => orders.page;
export const totalSelector = ({ lists: { orders } }) => orders.total;
export const ordersSelector = ({ lists: { orders } }) => orders.entries;
export const containerSelector = ({ lists }) => {
  const { entries: orders, page: current, total } = lists.orders;
  const pagination = { total, current };
  return { orders, pagination };
};

export default {
  pageSelector,
  totalSelector,
  ordersSelector,
  containerSelector,
};
