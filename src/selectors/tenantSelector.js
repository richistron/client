import {createSelector} from 'reselect';

// TODO add tests
const tenant = (state) => state.get('tenant');

export default createSelector([tenant], (tenant) => tenant && tenant.size > 0 ? tenant : null)
