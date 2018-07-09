import {fromJS} from 'immutable';

const INITIAL_STATE = {
  name: 'yolo',
};

const tenantReducer = (state, action) => {
  if (!state) {
   return fromJS( INITIAL_STATE );
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

