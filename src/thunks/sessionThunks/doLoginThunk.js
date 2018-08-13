import {actions, thunks} from './index';
import Api from '../../helpers/Api';
import { encode } from '../../helpers/Crypto';
import {getFormValues} from 'redux-form/immutable';

const doLoginThunk = () => (dispatch, getState) =>
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

        dispatch(thunks.saveSession({ access_token, client, uid }));
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
  });

export default doLoginThunk;
