import doLoginThunk from './doLoginThunk';
import logOutThunk from './logOutThunk';
import saveSessionThunk from './saveSessionThunk';
import validateTokenThunk from './validateTokenThunk';

const thunks = {
  doLogin: doLoginThunk,
  logout: logOutThunk,
  saveSession: saveSessionThunk,
  validateToken: validateTokenThunk,
};

export default thunks;
