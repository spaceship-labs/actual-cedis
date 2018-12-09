export const pageSelector = ({ containers: { OrdersView } }) => OrdersView.page;
export const totalSelector = ({ containers: { OrdersView } }) =>
  OrdersView.total;
export const ordersSelector = ({ containers: { OrdersView } }) =>
  OrdersView.entries;
export const containerSelector = ({ containers: { OrdersView } }) => {
  const { entries: orders, page: current, total } = OrdersView;
  const pagination = { total, current };
  return { orders, pagination };
};

export default {
  pageSelector,
  totalSelector,
  ordersSelector,
  containerSelector,
};
