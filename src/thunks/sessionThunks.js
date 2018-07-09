import isUserLogged from '../selectors/isUserLogged';
import Api from '../helpers/Api';
import sessionActions from '../actions/sessionActions';

// TODO add tests
const sessionThunks = {

  // calls do login if user is not logged
  validateSession: () => (dispatch, getState) => {
    const isLogged = isUserLogged(getState());
    if (!isLogged) {
      dispatch(sessionThunks.doLoding());
    }
  },

  // login
  doLoding: () => (dispatch) => {
    Api({
      method: 'POST',
      url: 'http://localhost:8000/auth/sign_in',
      token: false,
      data: {
        email: 'richistron@gmail.com',
        password: 'spree123'
      }
    })
      .then((res) => {
        const access_token = res.header['access-token'];
        const client = res.header['client'];
        const uid = res.header['uid'];

        dispatch(sessionActions.saveSession({access_token, client, uid}));
      })
      // TODO handle error
      .catch(() => console.log('vvlv'))
  },
};

export default sessionThunks;
