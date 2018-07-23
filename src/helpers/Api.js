import request from 'superagent';
import store from '../reducers/store';
import sessionSelector from '../selectors/sessionSelector';
import { decode } from './Crypto';

const { NODE_ENV } = process.env;
const server =
  NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : 'https://api';

const Api = ({ method = 'GET', token = true, data = null, url = null }) =>
  new Promise((resolve, reject) => {
    let _request = request(method, `${server}${url}`);

    if (data) {
      _request = _request.send(data);
    }

    if (token) {
      _request = _request.set(
        'client',
        decode(sessionSelector(store.getState()).get('client'))
      );
      _request = _request.set(
        'access_token',
        decode(sessionSelector(store.getState()).get('access_token'))
      );
      _request = _request.set(
        'uid',
        decode(sessionSelector(store.getState()).get('uid'))
      );
    }

    _request = _request.set('Accept', 'application/json');

    _request.end((err, res) => {
      if (err) {
        reject(res);
      } else {
        resolve(res);
      }
    });
  });

export default Api;
