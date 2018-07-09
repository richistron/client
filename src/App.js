import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import DefaultLayout from './layouts/DefaultLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
          <DefaultLayout />
      </div>
    );
  }
}

export default App;
