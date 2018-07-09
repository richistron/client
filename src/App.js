import 'semantic-ui-css/semantic.min.css';
import './App.css';
import React, { Component } from 'react';
import Routes from './routes/Routes';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Routes />
        </div>
    );
  }
}

export default App;
