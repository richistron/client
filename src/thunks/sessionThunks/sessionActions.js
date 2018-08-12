import { actionTypes } from './index';

const sessionActions = {
  loading: isLoading => ({
    type: actionTypes.SESSION_LOADING,
    isLoading
  }),

  saveSession: ({ access_token, client, uid }) => ({
    access_token,
    client,
    type: actionTypes.SESSION_SAVE_TOKEN,
    uid
  }),

  setErrors: errors => ({
    type: actionTypes.SESSION_SET_ERRORS,
    errors
  }),

  saveUser: ({ nickname, email, tenant_id }) => ({
    type: actionTypes.SESSION_SAVE_USER,
    nickname,
    email,
    tenant_id
  })
};

export default sessionActions;
