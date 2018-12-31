export const requestSelector = ({ containers }) =>
  containers.CancelRequestOld.request;

export const statusSelector = ({ containers }) =>
  containers.CancelRequestOld.status;

export const acceptedSelector = ({ containers }) =>
  containers.CancelRequestOld.accepted;

export const rejectedSelector = ({ containers }) =>
  containers.CancelRequestOld.rejected;

export const propsSelector = ({ containers }) => {
  const {
    CancelRequestOld: {
      request,
      accepted: acceptedElements,
      rejected: rejectedElements,
    },
  } = containers;

  return { request, acceptedElements, rejectedElements };
};

export default {
  requestSelector,
  statusSelector,
  acceptedSelector,
  rejectedSelector,
  propsSelector,
};
