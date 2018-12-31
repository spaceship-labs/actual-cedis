const cancelRequestSelector = ({ objects }) => objects.cancelRequest;

const loadingSelector = ({ containers }) => containers.CancelRequest.loading;

const containerSelector = state => {
  const {
    containers: {
      CancelRequest: { loading },
    },
    objects: { cancelRequest },
    lists: { products },
  } = state;

  return { loading, cancelRequest, products };
};

export default { cancelRequestSelector, loadingSelector, containerSelector };
