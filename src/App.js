import './App.css';
import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import Routes from './routes';
import store from './reducers/store';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
