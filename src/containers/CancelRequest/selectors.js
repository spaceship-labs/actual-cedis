export const cancelSelector = ({ objects }) => objects.cancelRequest;
export const loadingSelector = ({ objects }) => objects.loadingCancel;
export const productSelector = ({ lists }) => lists.products;
export const containerSelector = ({ objects, lists }) => {
  const { cancelRequest, loadingCancel } = objects;
  const { products } = lists;
  return { cancelRequest, products, loadingCancel };
};
export default {
  cancelSelector,
  loadingSelector,
  productSelector,
  containerSelector,
};
