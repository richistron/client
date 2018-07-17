import PropTypes from 'prop-types';
import React from 'react'
import { Container } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';
import DefaultLayoutController from './DefaultLayoutController';

class DefaultLayout extends React.PureComponent {
  render(){
    const invalidTenant = (props) => !props.tenant && props.pathname !== '/tenant';
    const invalidLoding = (props) => props.tenant && !props.isUserLogged && props.pathname !== '/login';
    const toHome = (props) => props.tenant && props.isUserLogged && (props.pathname === '/login' || props.pathname === '/tenant');
    return (
      <Container style={{ paddingTop: '20px' }} text>
        { invalidTenant(this.props) &&
            <Redirect to={{pathname: '/tenant'}} />
        }
        { invalidLoding(this.props) &&
            <Redirect to={{pathname: '/login'}} />
        }
        { toHome(this.props) &&
            <Redirect to={{pathname: '/'}} />
        }
        {this.props.children}
      </Container>

    );
  }
}

DefaultLayout.defaultProps = {
};

DefaultLayout.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
  tenant: PropTypes.string.isRequired,
};

export default DefaultLayoutController( DefaultLayout );

