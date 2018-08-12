import { fromJS } from 'immutable';
import { actionTypes } from '../thunks/sessionThunks';
import ls from 'local-storage';

export const INITIAL_STATE = fromJS({
  access_token: ls('access_token'),
  client: ls('client'),
  uid: ls('uid'),
  errors: {
    email: '',
    password: ''
  },
  isLoading: false,
  nickname: null,
  email: null,
  tenant_id: null
});

const sessionReducer = (state, action) => {
  if (!state) {
    return INITIAL_STATE;
  }

  switch (action.type) {
    case actionTypes.SESSION_SAVE_TOKEN: {
      return state
        .set('client', action.client)
        .set('access_token', action.access_token)
        .set('uid', action.uid);
    }

    case actionTypes.SESSION_SET_ERRORS: {
      return state.set('errors', fromJS(action.errors));
    }

    case actionTypes.SESSION_LOADING: {
      return state.set('isLoading', action.isLoading);
    }

    case actionTypes.SESSION_SAVE_USER: {
      return state
        .set('nickname', action.nickname)
        .set('tenant_id', action.tenant_id)
        .set('email', action.email);
    }

    default: {
      return state;
    }
  }
};

export default sessionReducer;
