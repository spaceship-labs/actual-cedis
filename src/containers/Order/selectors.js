export const orderSelector = ({ objects }) => objects.order;
export const loadingSelector = ({ objects }) => objects.loading;
export const productSelector = ({ lists }) => lists.products;
export const containerSelector = ({ objects, lists }) => {
  const { order, loading } = objects;
  const { products } = lists;
  return { order, loading, products };
};
export default {
  orderSelector,
  loadingSelector,
  productSelector,
  containerSelector,
};
