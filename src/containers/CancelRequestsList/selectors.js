export const pageSelector = ({ lists: { cancelRequests } }) =>
  cancelRequests.page;
export const totalSelector = ({ lists: { cancelRequests } }) =>
  cancelRequests.total;
export const cancelRequestsSelector = ({ lists: { cancelRequests } }) =>
  cancelRequests.entries;
export const containerSelector = ({ lists }) => {
  const {
    entries: cancelRequests,
    page: current,
    total,
  } = lists.cancelRequests;
  const pagination = { total, current };
  return { cancelRequests, pagination };
};

export default {
  pageSelector,
  totalSelector,
  cancelRequestsSelector,
  containerSelector,
};
