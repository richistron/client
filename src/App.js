import './App.css';
import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react';
import Routes from './routes';
import store from './reducers/store';
import { Provider } from 'react-redux';

// eslint-disable-next-line
class App extends Component {
  render() {
    return <Provider store={store}><Routes /></Provider>;
  }
}

export default App;
