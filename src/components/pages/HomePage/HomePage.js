import React from 'react';
import {Header} from 'semantic-ui-react';
import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class HomePage extends React.PureComponent {
  render() {
    const {isUserLogged} = this.props;
    return (
      <DefaultLayout>
        {!isUserLogged &&
        <Redirect to={{pathname: '/login'}} />
        }
        <Header as='h2'>Home Page</Header>

        <Header as='h4' attached='top' block>
          Top Block Header
        </Header>
      </DefaultLayout>
    );
  }
}

HomePage.propTypes = {
  isUserLogged: PropTypes.bool.isRequired,
};

HomePage.defaultProps = {
};


export default HomePage;
