import PropTypes from 'prop-types';
import React from 'react';
import { Container } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import DefaultLayoutController from './DefaultLayoutController';

class DefaultLayout extends React.PureComponent {
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

  render() {
    const invalidTenant = props =>
      !props.tenant &&
      props.pathname !== '/tenant' &&
      !this.props.isSessionLoading;
    const invalidLoding = props =>
      props.tenant &&
      !props.isUserLogged &&
      props.pathname !== '/login' &&
      !this.props.isSessionLoading;
    const toHome = props =>
      props.tenant &&
      props.isUserLogged &&
      (props.pathname === '/login' || props.pathname === '/tenant') &&
      !this.props.isSessionLoading;
    return (
      <Container style={{ paddingTop: '20px' }} text>
        {invalidTenant(this.props) && <Redirect to={{ pathname: '/tenant' }} />}
        {invalidLoding(this.props) && <Redirect to={{ pathname: '/login' }} />}
        {toHome(this.props) && <Redirect to={{ pathname: '/' }} />}
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
