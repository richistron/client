import Api from '../helpers/Api';
import sessionActions from './sessionActions';
import {getFormValues} from 'redux-form/immutable';
import ls from 'local-storage';
import {encode} from '../helpers/Crypto';

const sessionThunks = {
  doLoding: () => (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch(sessionActions.loading(true));
    Api({
      method: 'POST',
      url: '/auth/sign_in',
      token: false,
      data: getFormValues('Login')(getState()).toJS(),
    })
      .then((res) => {
        dispatch(sessionActions.loading(false));
        const access_token = encode( res.header['access-token'] );
        const client = encode( res.header['client'] );
        const uid = encode( res.header['uid'] );

        dispatch(sessionThunks.saveSession({access_token, client, uid}));
      })
      .catch(({statusCode}) => {
        dispatch(sessionActions.loading(false));
        if (statusCode === 401) {
          dispatch(sessionActions.setErrors({password: 'Contraseña invalida'}));
          setTimeout(() => dispatch(sessionActions.setErrors({})), 3000);
        }
      });
  }),

  saveSession: ({access_token, client, uid}) => (dispatch) => {
    ls('access_token', access_token);
    ls('client', client);
    ls('uid', uid);
    dispatch(sessionActions.saveSession({access_token, client, uid}));
  }
};

export default sessionThunks;
