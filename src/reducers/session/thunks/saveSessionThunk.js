import ls from 'local-storage';
import {sessionActions} from '../index';

// TODO make ls a helper
const saveSessionThunk = ({ access_token, client, uid }) => dispatch =>
  new Promise(resolve => {
    ls('access_token', access_token);
    ls('client', client);
    ls('uid', uid);
    dispatch(sessionActions.saveSession({ access_token, client, uid }));
    resolve();
  });

export default saveSessionThunk;
