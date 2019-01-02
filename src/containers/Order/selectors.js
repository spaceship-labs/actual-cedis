export const orderSelector = ({ objects }) => objects.order;
export const loadingSelector = ({ objects }) => objects.loading;
export const containerSelector = ({ objects }) => {
  const { order, loading } = objects;
  return { order, loading };
};
export default { orderSelector, loadingSelector, containerSelector };
