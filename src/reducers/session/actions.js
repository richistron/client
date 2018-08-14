import { sessionActionTypes } from './index';

const actions = {
  loading: isLoading => ({
    type: sessionActionTypes.SESSION_LOADING,
    isLoading
  }),

  saveSession: ({ access_token, client, uid }) => ({
    access_token,
    client,
    type: sessionActionTypes.SESSION_SAVE_TOKEN,
    uid
  }),

  setErrors: errors => ({
    type: sessionActionTypes.SESSION_SET_ERRORS,
    errors
  }),

  saveUser: ({ nickname, email, tenant_id }) => ({
    type: sessionActionTypes.SESSION_SAVE_USER,
    nickname,
    email,
    tenant_id
  })
};

export default actions;
