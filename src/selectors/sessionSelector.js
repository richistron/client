import { createSelector } from 'reselect';

const session = state => state.get('session');

export default createSelector(
  [session],
  session => (session && session.size > 0 ? session : null)
);
