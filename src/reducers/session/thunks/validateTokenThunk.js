import Api from '../../../helpers/Api';
import {sessionActions, sessionThunks} from '../index';
import AsyncThunk from '../../../helpers/AsyncThunk';

const validateTokenThunk = AsyncThunk(({dispatch}) => {
  dispatch(sessionActions.loading(true));
  return Api({
    method: 'GET',
    url: '/auth/validate_token'
  })
    .then(res => {
      dispatch(sessionActions.saveUser(res.body.data));
      dispatch(sessionActions.loading(false));
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
    });
});

export default validateTokenThunk;
