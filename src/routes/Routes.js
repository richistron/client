import CajaPage from '../components/organisms/CajaPage';
import HomePage from '../components/organisms/HomePage';
import LoginPage from '../components/organisms/LoginPage';
import React from 'react';
import TenantPage from '../components/organisms/TenantPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
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
};

Routes.defaultProps = {};

Routes.propTypes = {};

export default Routes;
