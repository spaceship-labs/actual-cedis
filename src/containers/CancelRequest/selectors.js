export const requestSelector = ({ containers }) =>
  containers.CancelRequest.request;

export const statusSelector = ({ containers }) =>
  containers.CancelRequest.status;

export const acceptedSelector = ({ containers }) =>
  containers.CancelRequest.accepted;

export const rejectedSelector = ({ containers }) =>
  containers.CancelRequest.rejected;

export const propsSelector = ({ containers }) => {
  const {
    CancelRequest: {
      request,
      accepted: acceptedElements,
      rejected: rejectedElements,
      confirmDialog,
    },
  } = containers;

  return { request, acceptedElements, rejectedElements, confirmDialog };
};

export default {
  requestSelector,
  statusSelector,
  acceptedSelector,
  rejectedSelector,
  propsSelector,
};
