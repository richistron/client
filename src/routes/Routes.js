import HomePage from '../components/pages/HomePage';
import LoginPage from '../components/pages/LoginPage';
// import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import TenantPage from '../components/pages/TenantPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// eslint-disable-next-line
class Routes extends PureComponent {
  render() {
    return (
        <div>
            <Router>
                <div>
                    <Route
                        component={HomePage}
                        exact
                        path='/'
                    />
                    <Route
                        component={LoginPage}
                        exact
                        path='/login'
                    />
                    <Route
                        component={TenantPage}
                        exact
                        path='/tenant'
                    />
                </div>
            </Router>
        </div>
    );
  }
}

Routes.defaultProps = {
};

Routes.propTypes = {
};


export default Routes;

