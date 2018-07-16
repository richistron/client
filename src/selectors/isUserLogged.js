import { createSelector } from 'reselect';
import session from './sessionSelector';

// TODO add tests
const isUserLogged = (session) => {
  if (!session) {
    return false;
  }
  if (!session.get('access_token') ||
    !session.get('client') || !session.get('uid')) {
    return false;
  }
  return true;
};

export default createSelector([session], isUserLogged);

