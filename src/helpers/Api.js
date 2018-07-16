import request from 'superagent';

const {NODE_ENV} = process.env;
const server = NODE_ENV === 'development' ? 'http://localhost:8000' : 'http://localhost:8000';

const Api = ({ method = 'GET', token = true, data = null, url = null }) =>
  new Promise((resolve, reject) => {
    let _request = request(method, `${server}${url}`);

    if (data) {
      _request = _request.send(data);
    }

    if (token) {
      _request = _request.set('X-API-Key', 'foobar');
    }

    _request = _request.set('Accept', 'application/json');

    _request.end((err, res) => {
      if (err) {
        reject(res);
      }
      else {
        resolve(res);
      }
    });

  });

export default Api;
