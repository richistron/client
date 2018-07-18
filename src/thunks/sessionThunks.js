import Api from '../helpers/Api';
import sessionActions from './sessionActions';
import { getFormValues } from 'redux-form/immutable';
import ls from 'local-storage';
import { encode } from '../helpers/Crypto';

const sessionThunks = {
  doLoding: () => (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(sessionActions.loading(true));
      Api({
        method: 'POST',
        url: '/auth/sign_in',
        token: false,
        data: getFormValues('Login')(getState()).toJS()
      })
        .then(res => {
          dispatch(sessionActions.loading(false));
          const access_token = encode(res.header['access-token']);
          const client = encode(res.header['client']);
          const uid = encode(res.header['uid']);

          dispatch(sessionThunks.saveSession({ access_token, client, uid }));
          dispatch(sessionActions.saveUser(res.body.data));
          resolve();
        })
        .catch(({ statusCode }) => {
          dispatch(sessionActions.loading(false));
          if (statusCode === 401) {
            dispatch(
              sessionActions.setErrors({ password: 'Contraseña invalida' })
            );
            setTimeout(() => dispatch(sessionActions.setErrors({})), 3000);
          }
          reject();
        });
    }),

  saveSession: ({ access_token, client, uid }) => dispatch =>
    new Promise(resolve => {
      ls('access_token', access_token);
      ls('client', client);
      ls('uid', uid);
      dispatch(sessionActions.saveSession({ access_token, client, uid }));
      resolve();
    }),

  validateToken: () => dispatch =>
    new Promise((resolve, reject) => {
      dispatch(sessionActions.loading(true));
      Api({
        method: 'GET',
        url: '/auth/validate_token'
      })
        .then(res => {
          dispatch(sessionActions.saveUser(res.body.data));
          dispatch(sessionActions.loading(false));
          resolve();
        })
        .catch(() => {
          dispatch(sessionActions.loading(false));
          dispatch(
            sessionThunks.saveSession({
              access_token: null,
              client: null,
              uid: null
            })
          );
          dispatch(
            sessionActions.saveUser({
              nickname: null,
              email: null,
              tenant_id: null
            })
          );
          reject();
        });
    }),

  logout: () => dispatch => {
    dispatch(
      sessionThunks.saveSession({ access_token: null, client: null, uid: null })
    );
    dispatch(
      sessionActions.saveUser({ nickname: null, email: null, tenant_id: null })
    );
  }
};

export default sessionThunks;
