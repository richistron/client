import Api from '../helpers/Api';
import sessionActions from './sessionActions';
import {getFormValues} from 'redux-form/immutable';
import ls from 'local-storage';
import {encode} from '../helpers/Crypto';

const sessionThunks = {
  doLoding: () => (dispatch, getState) => Api({
      method: 'POST',
      url: '/auth/sign_in',
      token: false,
      data: getFormValues('Login')(getState()).toJS(),
    })
      .then((res) => {
        const access_token = encode( res.header['access-token'] );
        const client = encode( res.header['client'] );
        const uid = encode( res.header['uid'] );

        dispatch(sessionThunks.saveSession({access_token, client, uid}));
      })
      .catch(() => console.log('vvlv')),

  saveSession: ({access_token, client, uid}) => (dispatch) => {
    ls('access_token', access_token);
    ls('client', client);
    ls('uid', uid);
    dispatch(sessionActions.saveSession({access_token, client, uid}));
  }
};

export default sessionThunks;
