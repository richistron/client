import {actionTypes} from '../thunks/tenantThunks';
import ls from 'local-storage';
import {fromJS} from 'immutable';

export const INITIAL_STATE = fromJS({
  application: ls('tenant_application') || '',
  id: ls('tenant_id') || '',
  name: ls('tenant_name') || '',
  errors: {
    tenant: '',
  },
  isLoading: false,
});

const tenantReducer = (state, action) => {
  if (!state) {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case actionTypes.TENANT_SAVE: {
      return state.set('name', action.name)
        .set('id', action.id)
        .set('application', action.application);
    }

    case actionTypes.TENANT_SET_ERROR: {
      return state.set('errors', fromJS(action.errors))
    }

    case actionTypes.TENANT_LOADING: {
      return state.set('isLoading', action.isLoading);
    }

    default: {
      return state;
    }
  }
};

export default tenantReducer;

