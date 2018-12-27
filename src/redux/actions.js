import app from './app/actions';
import auth from './auth/actions';
import objects from './objects/actions';

export const appActions = { ...app };
export const authActions = { ...auth };
export const listsActions = { ...lists };
export const objectsActions = { ...objects };

export default {
  appActions,
  authActions,
  listsActions,
  objectsActions,
};
