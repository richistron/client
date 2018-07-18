import HomePage from '../components/pages/HomePage';
import LoginPage from '../components/pages/LoginPage';
// import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import TenantPage from '../components/pages/TenantPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CajaPage from '../components/pages/CajaPage';

class Routes extends PureComponent {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route component={HomePage} exact path="/" />
            <Route component={LoginPage} exact path="/login" />
            <Route component={TenantPage} exact path="/tenant" />
            <Route component={CajaPage} exact path="/caja" />
          </div>
        </Router>
      </div>
    );
  }
}

Routes.defaultProps = {};

Routes.propTypes = {};

export default Routes;
