import HomePage from '../components/pages/HomePage';
import LoginPage from '../components/pages/LoginPage';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Tenant from '../components/pages/Tenant/Tenant';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Routes extends PureComponent {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path='/tenant' component={Tenant} />
          </div>
        </Router>
      </div>
    );
  }
}

Routes.defaultProps = {
  tenant: null,
};

Routes.propTypes = {
  tenant: PropTypes.string,
};


export default Routes;

