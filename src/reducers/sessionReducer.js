import {fromJS} from 'immutable';
import {sessionActionsTypes} from '../thunks/sessionActions';
import ls from 'local-storage';

export const INITIAL_STATE = fromJS({
  access_token: ls('access_token'),
  client: ls('client'),
  uid: ls('uid'),
});

const sessionReducer = (state, action) => {
  if (!state) {
    return INITIAL_STATE;
  }

  switch (action.type) {

    case sessionActionsTypes.SESSION_SAVE_TOKEN: {
      return state.set('client', action.client)
        .set('access_token', action.access_token)
        .set('uid', action.uid);
    }

    default: {
      return state;
    }
  }
};

export default sessionReducer;

