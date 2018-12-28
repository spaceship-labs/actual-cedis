import { createActions } from 'ractionx';

const prefix = '@actual/cedis/lists/Orders';

const types = ['GET_PRODUCTS', 'SET_PRODUCTS'];

const { getProducts, setProducts } = createActions(prefix, types);

export default { getProducts, setProducts };
