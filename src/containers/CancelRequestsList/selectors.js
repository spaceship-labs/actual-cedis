export const pageSelector = ({ lists: { cancelRequests } }) =>
  cancelRequests.page;
export const loadingSelector = ({ lists: { cancelRequests } }) =>
  cancelRequests.loading;
export const totalSelector = ({ lists: { cancelRequests } }) =>
  cancelRequests.total;
export const cancelRequestsSelector = ({ lists: { cancelRequests } }) =>
  cancelRequests.entries;
export const containerSelector = ({ lists }) => {
  const {
    entries: cancelRequests,
    page: current,
    total,
    loading,
  } = lists.cancelRequests;
  const pagination = { total, current };
  return { cancelRequests, pagination, loading };
};

export default {
  pageSelector,
  totalSelector,
  cancelRequestsSelector,
  containerSelector,
  loadingSelector,
};
