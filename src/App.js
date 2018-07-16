import './App.css';
import 'semantic-ui-css/semantic.min.css';
import React, { PureComponent } from 'react';
import Routes from './routes';
import store from './reducers/store';
import { Provider } from 'react-redux';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
