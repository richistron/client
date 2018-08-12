import Api from '../../helpers/Api';
import { actions } from './index';
import { getFormValues } from 'redux-form/immutable';
import ls from 'local-storage';
import { encode } from '../../helpers/Crypto';

const sessionThunks = {
  doLoding: () => (dispatch, getState) =>
    new Promise((resolve, reject) => {
      dispatch(actions.loading(true));
      Api({
        method: 'POST',
        url: '/auth/sign_in',
        token: false,
        data: getFormValues('Login')(getState()).toJS()
      })
        .then(res => {
          dispatch(actions.loading(false));
          const access_token = encode(res.header['access-token']);
          const client = encode(res.header['client']);
          const uid = encode(res.header['uid']);

          dispatch(sessionThunks.saveSession({ access_token, client, uid }));
          dispatch(actions.saveUser(res.body.data));
          resolve();
        })
        .catch(({ statusCode }) => {
          dispatch(actions.loading(false));
          if (statusCode === 401) {
            dispatch(
              actions.setErrors({ password: 'Contraseña invalida' })
            );
            setTimeout(() => dispatch(actions.setErrors({})), 3000);
          }
          reject();
        });
    }),

  saveSession: ({ access_token, client, uid }) => dispatch =>
    new Promise(resolve => {
      ls('access_token', access_token);
      ls('client', client);
      ls('uid', uid);
      dispatch(actions.saveSession({ access_token, client, uid }));
      resolve();
    }),

  validateToken: () => dispatch =>
    new Promise((resolve, reject) => {
      dispatch(actions.loading(true));
      Api({
        method: 'GET',
        url: '/auth/validate_token'
      })
        .then(res => {
          dispatch(actions.saveUser(res.body.data));
          dispatch(actions.loading(false));
          resolve();
        })
        .catch(() => {
          dispatch(actions.loading(false));
          dispatch(
            sessionThunks.saveSession({
              access_token: null,
              client: null,
              uid: null
            })
          );
          dispatch(
            actions.saveUser({
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
      actions.saveUser({ nickname: null, email: null, tenant_id: null })
    );
  }
};

export default sessionThunks;
