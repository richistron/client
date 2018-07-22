import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import DefaultLayoutController from './DefaultLayoutController';

class DefaultLayout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.invalidTenant = this.invalidTenant.bind(this);
    this.invalidLoding = this.invalidLoding.bind(this);
    this.toHome = this.toHome.bind(this);
  }

  componentDidMount() {
    if (
      this.props.isUserLogged &&
      this.props.tenant &&
      !this.props.isSessionLoading &&
      !this.props.email
    ) {
      this.props.validateToken();
    }
  }

  toHome() {
    return (
      this.props.tenant &&
      this.props.isUserLogged &&
      (this.props.pathname === '/login' || this.props.pathname === '/tenant') &&
      !this.props.isSessionLoading
    );
  }

  invalidLoding() {
    return (
      this.props.tenant &&
      !this.props.isUserLogged &&
      this.props.pathname !== '/login' &&
      !this.props.isSessionLoading
    );
  }

  invalidTenant() {
    return (
      !this.props.tenant &&
      this.props.pathname !== '/tenant' &&
      !this.props.isSessionLoading
    );
  }

  render() {
    return (
      <Container style={{ paddingTop: '20px' }} text>
        {this.invalidTenant() && <Redirect to={{ pathname: '/tenant' }} />}
        {this.invalidLoding() && <Redirect to={{ pathname: '/login' }} />}
        {this.toHome() && <Redirect to={{ pathname: '/' }} />}
        {this.props.children}
      </Container>
    );
  }
}

DefaultLayout.defaultProps = {};

DefaultLayout.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
  tenant: PropTypes.string.isRequired
};

export default DefaultLayoutController(DefaultLayout);
