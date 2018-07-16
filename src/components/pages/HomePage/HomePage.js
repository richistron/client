import DefaultLayout from '../../layouts/DefaultLayout';
import PropTypes from 'prop-types';
import React from 'react';
import {Header} from 'semantic-ui-react';

class HomePage extends React.PureComponent {
  render() {
    return (
      <DefaultLayout
        isUserLogged={this.props.isUserLogged}
        pathname={this.props.location.pathname}
        tenant={this.props.tenant}
        key={'home'}
      >
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
  location: PropTypes.object.isRequired,
};

HomePage.defaultProps = {
};


export default HomePage;
