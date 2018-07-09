
export const sessionActionsTypes = {
  'SESSION_SAVE_TOKEN': 'SESSION_SAVE_TOKEN',
};

const sessionActions = {
  saveSession: ({access_token, client, uid}) => ({
    type: sessionActionsTypes.SESSION_SAVE_TOKEN,
    access_token,
    client,
    uid,
  }),
};

export default sessionActions;
