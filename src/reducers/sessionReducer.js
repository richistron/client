import {fromJS} from 'immutable';
import {sessionActionsTypes} from '../actions/sessionActions';

export const INITIAL_STATE = fromJS({
  access_token: null,
  client: null,
  uid: null,
});

// TODO add tests
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

