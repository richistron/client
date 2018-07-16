import {tenantActionsTypes} from '../thunks/tenantActions';
import ls from 'local-storage';
import {fromJS} from 'immutable';

export const INITIAL_STATE = fromJS({
  application: ls('tenant_application') || '',
  id: ls('tenant_id') || '',
  name: ls('tenant_name') || '',
  errors: {
    tenant: '',
  },
});

const tenantReducer = (state, action) => {
  if (!state) {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case tenantActionsTypes.TENANT_SAVE: {
      return state.set('name', action.name)
        .set('id', action.id)
        .set('application', action.application);
    }

    case tenantActionsTypes.TENANT_SET_ERROR: {
      return state.set('errors', fromJS(action.errors))
    }

    default: {
      return state;
    }
  }
};

export default tenantReducer;

