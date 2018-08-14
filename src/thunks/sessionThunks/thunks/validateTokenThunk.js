import Api from '../../../helpers/Api';
import {actions, thunks} from '../index';
import AsyncThunk from '../../../helpers/AsyncThunk';

const validateTokenThunk = AsyncThunk(({dispatch}) => {
  dispatch(actions.loading(true));
  return Api({
    method: 'GET',
    url: '/auth/validate_token'
  })
    .then(res => {
      dispatch(actions.saveUser(res.body.data));
      dispatch(actions.loading(false));
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
    });
});

export default validateTokenThunk;
