import Api from '../../../helpers/Api';
import { encode } from '../../../helpers/Crypto';
import {sessionActions, sessionThunks} from '../index';
import {getFormValues} from 'redux-form/immutable';

const doLoginThunk = () => (dispatch, getState) =>
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
  });

export default doLoginThunk;
