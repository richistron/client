import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Testito from '../components/Testito'

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Testito} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;

