export const sessionActionsTypes = {
  'SESSION_SAVE_TOKEN': 'SESSION_SAVE_TOKEN',
};

const sessionActions = {
  saveSession: ({access_token, client, uid}) => ({
    access_token,
    client,
    type: sessionActionsTypes.SESSION_SAVE_TOKEN,
    uid,
  }),
};

export default sessionActions;
