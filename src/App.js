import 'semantic-ui-css/semantic.min.css';
import './App.css';
import React, { Component } from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './reducers/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
