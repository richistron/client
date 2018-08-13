import {thunks, actions} from '../index';

const logOutThunk = () => dispatch => new Promise((resolve)=> {
  dispatch(
    thunks.saveSession({ access_token: null, client: null, uid: null })
  );
  dispatch(
    actions.saveUser({ nickname: null, email: null, tenant_id: null })
  );
  resolve();
});

export default logOutThunk;
