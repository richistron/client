import {sessionThunks, sessionActions} from '../index';

const logOutThunk = () => dispatch => new Promise((resolve)=> {
  dispatch(
    sessionThunks.saveSession({ access_token: null, client: null, uid: null })
  );
  dispatch(
    sessionActions.saveUser({ nickname: null, email: null, tenant_id: null })
  );
  resolve();
});

export default logOutThunk;
