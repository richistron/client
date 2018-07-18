export const sessionActionsTypes = {
  SESSION_SAVE_TOKEN: 'SESSION_SAVE_TOKEN',
  SESSION_SET_ERRORS: 'SESSION_SET_ERRORS',
  SESSION_LOADING: 'SESSION_LOADING',
  SESSION_SAVE_USER: 'SESSION_SAVE_USER'
};

const sessionActions = {
  loading: isLoading => ({
    type: sessionActionsTypes.SESSION_LOADING,
    isLoading
  }),

  saveSession: ({ access_token, client, uid }) => ({
    access_token,
    client,
    type: sessionActionsTypes.SESSION_SAVE_TOKEN,
    uid
  }),

  setErrors: errors => ({
    type: sessionActionsTypes.SESSION_SET_ERRORS,
    errors
  }),

  saveUser: ({ nickname, email, tenant_id }) => ({
    type: sessionActionsTypes.SESSION_SAVE_USER,
    nickname,
    email,
    tenant_id
  })
};

export default sessionActions;
