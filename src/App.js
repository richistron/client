import 'semantic-ui-css/semantic.min.css';
import './App.css';
import React, { Component } from 'react';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import store from './reducers/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
