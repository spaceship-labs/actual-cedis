const cancelRequestSelector = ({ objects }) => objects.cancelRequest;

const containerSelector = state => {
  const {
    objects: { cancelRequest },
    lists: { products },
  } = state;

  return { cancelRequest, products };
};

export default { cancelRequestSelector, containerSelector };
