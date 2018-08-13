import validateTokenThunk from './validateTokenThunk';
import logOutThunk from './logOutThunk';
import saveSessionThunk from './saveSessionThunk';
import doLoginThunk from './doLoginThunk';

const thunks = {
  doLogin: doLoginThunk,
  saveSession: saveSessionThunk,
  validateToken: validateTokenThunk,
  logout: logOutThunk,
};

export default thunks;
