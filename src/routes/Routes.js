import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout';
import SampleLayout from '../layouts/SampleLayout';

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={DefaultLayout} />
            <Route exact path="/sample" component={SampleLayout} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;

