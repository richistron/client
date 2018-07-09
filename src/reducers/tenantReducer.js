import {fromJS} from 'immutable';

export const INITIAL_STATE = fromJS({
  name: null,
});

// TODO add tests
const tenantReducer = (state, action) => {
  if (!state) {
   return INITIAL_STATE;
  }

  switch (action.type) {
    case 'CHANGE_TENANT_NAME': {
     return state.set('name', action.name);
    }

    default: {
      return state;
    }
  }
};

export default tenantReducer;

