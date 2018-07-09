import { createSelector } from 'reselect';
import tenant from './tenantSelector';
import session from './sessionSelector';

// TODO add tests
const isUserLogged = (tenant, session) => {
  if (!session || !tenant) {
    return false;
  }
  if (!tenant.get('name') || !session.get('access_token') ||
    !session.get('client') || !session.get('uid')) {
    return false;
  }
  return true;
};

export default createSelector([tenant, session], isUserLogged);

