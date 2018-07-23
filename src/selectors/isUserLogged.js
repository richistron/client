import { createSelector } from 'reselect';
import session from './sessionSelector';

const isUserLogged = session => {
  if (!session) {
    return false;
  }
  if (
    !session.get('access_token') ||
    !session.get('client') ||
    !session.get('uid')
  ) {
    return false;
  }
  return true;
};

export default createSelector([session], isUserLogged);
