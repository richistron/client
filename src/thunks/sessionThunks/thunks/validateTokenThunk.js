import Api from '../../../helpers/Api';
import {actions, thunks} from '../index';

const validateTokenThunk = () => dispatch => new Promise((resolve, reject) => {
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
        thunks.saveSession({
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
});

export default validateTokenThunk;
