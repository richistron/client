export const sessionActionsTypes = {
  SESSION_SAVE_TOKEN: 'SESSION_SAVE_TOKEN',
  SESSION_SET_ERRORS: 'SESSION_SET_ERRORS',
};

const sessionActions = {
  saveSession: ({access_token, client, uid}) => ({
    access_token,
    client,
    type: sessionActionsTypes.SESSION_SAVE_TOKEN,
    uid,
  }),

  setErrors: (errors) => ({
    type: sessionActionsTypes.SESSION_SET_ERRORS,
    errors,
  })
};

export default sessionActions;
