export const pageSelector = ({ containers: { CancelRequestsList } }) =>
  CancelRequestsList.page;
export const totalSelector = ({ containers: { CancelRequestsList } }) =>
  CancelRequestsList.total;
export const cancelRequestsSelector = ({
  containers: { CancelRequestsList },
}) => CancelRequestsList.entries;
export const containerSelector = ({ containers: { CancelRequestsList } }) => {
  const { entries: cancelRequests, page: current, total } = CancelRequestsList;
  const pagination = { total, current };
  return { cancelRequests, pagination };
};

export default {
  pageSelector,
  totalSelector,
  cancelRequestsSelector,
  containerSelector,
};
